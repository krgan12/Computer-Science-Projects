#!/bin/sh
echo "The script PID is $$" #$$ is the Process ID of the current running process
sleep 30 & #30 second pause to not overwhelm the execution
child_pid = "$!" #Defining the Process ID of the most recent background process
echo "Child PID is $child_pid" #Displays the PID of the current child process