#!/bin/sh
echo "The script PID is $$" #$$ is the Process ID of the current running process
sleep 30 & #30 second pause to not overwhelm the execution
Child_PID = "$!" #Defining the Process ID of the most recent background process
#Displays the PID of the current child process
echo "Child PID is $Child_PID" 
#To test to see the parent and child process is as follows:
#echo "ps -a -o pid,pgid:"
#wait "`ps -a -o pid,pgid,cmd`"
echo "Child process with PID $Child_PID is now in the OS waiting queue." #Prints the message
echo "The child process is waiting for a software interrupt from the user." #Echos the message to the output on terminal
echo "Enter the SIGINT interrupt to have the child process execute on the CPU." #Echos 'Enter the SIGINT interrupt to have the child process execute on the CPU.' to the stdout
trap 'echo; echo SIGINT signal received!' SIGINT #Moves child process from running state to the waiting state and the user has to input: control+c
wait $Child_PID #Waits for the child process
echo "Enter SIGQUIT interrupt." #Prints to the stdout
trap 'echo; echo SIGQUIT signal received!' SIGQUIT #Moves the child process again and the user has to input: control+\
wait $Child_PID #waits for the child process
echo "Completed executing." #Echos 'Completed executing.' to the stdout
echo "Terminating all processes." #Prints 'Terminating all processes.' to the stdout
exit 0 #Exits out of the program with no errors