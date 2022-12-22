NOTEBOOKS = $(shell git ls-files [0-9]*.md)

all: book

include Makefile.style

# the style cell comes third
NBNORMFLAGS = -l1 -L 'licen[cs]e' -s3 -S 'js/tools' -t h1
include Makefile.norm

include Makefile.book

include Makefile.toc
