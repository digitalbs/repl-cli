## Getting Started
Install globally to use as a CLI with a bin file

`npm install -g`

Then, for development purposes, we will want to link this in the root of the project so we can use the bin command globally.
`npm link`

Both of these commands might require sudo.

## Using CLI(REPL)
Now that we have everything installed and linked, we can now use the cli.

###To start the CLI
`rm`

This will start up the CLI. Currently, there are two ways to do things. One is by defining a command. The other is by calling a self-invoked function.

#### Commands
Any command called in the CLI requires a ***.*** preface before the command. 

`.hello` is how we would call the **hello** command. This command allows us to pass a parameter, which is a name. To do this, we would call it as so:
```.hello Brian```

You can also find the available commands in the CLI tool by typing help in the command line.
```.help```

#### Self-Invoked Function
From the command line, you would call it with the context name. In the current demo, you can use the ***start*** name.
```start```

