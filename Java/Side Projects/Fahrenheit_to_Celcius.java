//Fahrenheit to Calcius converstion in Java
//Author: Keagan Rodriuges

public class FahrenheitToCelsiusTable {

public static void main (String args[]) {

double F, C;
int counter;

counter = 0;

for (F = 0; F <= 106; F++ ) {
C = (F - 32) * (5.0 / 9) ;
System.out.println (F + "  Degrees Fahrenheit is " + C + "  Degree Celsius" );
counter++;

if (counter == 10) {
System.out.println();
counter = 0;
    }
   }
System.out.println();
System.out.println("WooHoo, Java Rules");
 }
}
