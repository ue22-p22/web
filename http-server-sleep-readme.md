# helper tool

this tool is for simulating delays when fetching http URLs

## setup

start it with

```shell
python http-server-sleep.py
```

## use it

you can then connect to

```shell
curl http://localhost:8000/sleep?sec=2
```

to simulate a 2-second delay in fetching a page

it will return a small JSON fragment with the incoming path, i.e.

```json
{"hello": "/sleep?sec=2", "delay": 2.0}
```
