#!/bin/sh
echo "The script PID is $$" #$$ is the Process ID of the current running process
sleep 30 & #30 second pause to not overwhelm the execution
child_PID = "$!" #Defining the Process ID of the most recent background process
echo "Child PID is $child_PID" #Displays the PID of the current child process
echo "Child process with PID $child_PID is now in the OS waiting queue" #Prints the message
echo "The child process if waiting for a software interrutp form the user."
echo "Enger the SIGNALINTeGER inerterupt to habe the child process exdecute on the CPU."
kill $child_PID