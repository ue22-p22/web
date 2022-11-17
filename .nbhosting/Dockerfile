# --------
FROM nbhosting/minimal-notebook

RUN true \
 && apt-get update --yes \
 && apt-get install --yes nodejs npm \
 && npm install -g --unsafe-perm ijavascript \
 && ijsinstall --install=global \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

# somehow node won't find stuff installed by npm, this band-aid will help
ENV NODE_PATH="/opt/conda/lib/node_modules/"

# mar 21. running as jovyan ruins the ability to build handouts
# USER jovyan

# NOTE
# we cannot use jupyter nbextension enable/disable
# because we provide our own nbconfig/notebook.json
# and that is where is stored the enabled/disabled extensions
RUN true \
 && pip install -U nb-courselevels \
 && pip install -U nbautoeval \
 && pip install -U ipythontutor \
 && pip install -U rise \
 && true


# node - one can display html fragments using $$.html
# that appears to ship with ijavascript
# additional npm packages can of course be added, like e.g
RUN npm install -g jsdom d3
# RUN npm install -g ijavascript-plotly plotly-notebook-js
