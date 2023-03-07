#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import http.server
import socketserver
import re
from time import sleep

PORT = 8000

class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self, *args, **kwargs):
        print(f"do_GET(self, {args}, {kwargs})")
        print(f"{self.headers}")
        print(f"{self.path}")

        # If request is sleep, just wait before sending response
        m = re.match("/sleep[?]sec=(.+)", self.path)
        if m:
            print("sleep", m)
            sleep(float(m.group(1)))

        return self.write_default_response()


    def do_OPTIONS(self, *args, **kwargs):
        # CORS May request with options.
        print(f"do_OPTIONS(self, {args}, {kwargs})")
        return self.write_default_response()

    def do_POST(self, *args, **kwargs):
        print(f"do_POST(self, {args}, {kwargs})")
        self.wfile.write("HTTP/1.1 403 Forbiden\n".encode("ascii"))

    def write_default_response(self):
        # Status response line.
        self.wfile.write("HTTP/1.1 200 OK\n".encode("ascii"))
        # HTTP Header key/value here
        # Add CORS header unconditionally.
        self.wfile.write("Access-Control-Allow-Origin: *\n".encode('ascii'))
        self.wfile.write("Access-Control-Allow-Headers: origin, content-type, x-requested-with\n".encode('ascii'))
        self.wfile.write("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS\n".encode('ascii'))
        # Mandatory end of header.
        self.wfile.write("\n".encode("ascii"))
        # Add body data of the request header, can be any binary data.


# Forking server will fork on any request
# This allow to reply to multiple request, but state change will be lost.
with socketserver.ForkingTCPServer(("127.0.0.1", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()

