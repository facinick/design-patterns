# Command Pattern

Client (We, who configures the remote)

Remote (Gets configured with Commands... Execute commands on button press.. have no idea what a command does... Can be reconfigured as many times... maintains history of executed commands...)

Commands (execute and undo, operates on Receiver objects, have common interface)

Receivers (Lights, Doors, etc)