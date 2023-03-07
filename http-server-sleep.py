#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import http.server
import socketserver
import re
import json
from time import sleep

PORT = 8000

class Handler(http.server.BaseHTTPRequestHandler):
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
        self.send_response(403, "Forbiden")
        self.send_header("Content-Length", 0)
        self.end_headers()

    def write_default_response(self, path, delay):
        body = json.dumps(dict(hello=path, delay=delay)).encode("utf-8")
        # Status response line.
        self.send_response(200, "OK")
        self.write_CORS_headers()
        self.send_header("Content-Length", len(body))
        self.end_headers()
        self.wfile.write(body)

    def write_CORS_headers(self):
        # Allow any request origin
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Headers",
            "origin, content-type, x-requested-with")
        self.send_header("Access-Control-Allow-Methods",
            "PUT, GET, POST, DELETE, OPTIONS")

# Forking server will fork on any request
# This allow to reply to multiple request, but state change will be lost.
with socketserver.ForkingTCPServer(("127.0.0.1", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()
