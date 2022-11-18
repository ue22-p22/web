NOTEBOOKS = $(shell git ls-files [0-9]*.md)

all: book

include Makefile.style

# the style cell comes third
NBNORMFLAGS = -l1 -s3 -t h1
include Makefile.norm

book:
	jupyter-book build .

.PHONY: all book
