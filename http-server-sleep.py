#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import http.server
import socketserver
import re
import json
from time import sleep

PORT = 8000

class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self, *args, **kwargs):
        print(f"do_GET(self, {args}, {kwargs})")
        print(f"{self.headers}")
        print(f"{self.path}")

        # If request is sleep, just wait before sending response
        m = re.match("/sleep[?]sec=(.+)", self.path)
        delay = 0
        if m:
            delay = float(m.group(1))
            print("sleep", delay)
            sleep(delay)

        return self.write_default_response(self.path, delay)


    def do_OPTIONS(self, *args, **kwargs):
        # CORS May request with options.
        print(f"do_OPTIONS(self, {args}, {kwargs})")
        return self.write_default_response()

    def do_POST(self, *args, **kwargs):
        print(f"do_POST(self, {args}, {kwargs})")
        self.wfile.write("HTTP/1.1 403 Forbiden\n".encode("ascii"))

    def write_default_response(self, path, delay):
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
        self.wfile.write(json.dumps(dict(hello=path, delay=delay)).encode("utf-8"))


# Forking server will fork on any request
# This allow to reply to multiple request, but state change will be lost.
with socketserver.ForkingTCPServer(("127.0.0.1", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()
