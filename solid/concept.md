# S.O.L.I.D.

Solid es un acrónimo que engloban 5 principios básicos de la programación orientada a objetos, inventados por Robert C. Martin 



## S. Single responsability - Responsabilidad simple

cada clase debería tener una responsabilidad sencilla y concreta, ósea "en lo posible" cada clase con un método.



## O. Open/Closed - Abierto/Cerrado

El diseño de una clase debe estar abierto a extensiones de código pero cerrado a modificaciones, para lograr este principio hay que tener en claro como como funcionara la aplicación donde ese extenderá y como interactuara con las demás clases.



## L. Liskov sustitution - Sustitución Liskov

Creado por Barbara Liskov, trata de que al crear clases derivadas estas sean tratadas como la clase base misma, se base en estos los siguientes principios para crear subclases y métodos:

+ Los tipos de parámetros en un método de una subclase debe ser igual o más abstracto que los tipos de parámetros en el método de la superclase.

+ El tipo de retorno en un método de una subclase debe coincidir o ser un subtipo del tipo de retorno en el método de la superclase.

+ Un método en una subclase no debería arrojar tipos de excepciones
  que no se espera que arroje el método base.

+ Una subclase no debe fortalecer precondiciones.

+ Una subclase no debe debilitar post-condiciones.

+ Constantes de una superclase deben ser preservados.

+ Una subclase no debe cambiar los valores de los campos privados de la superclase.

  

## I. Interface Segregation - Segregación de interfaces

Los clientes no deben ser forzados a depender de métodos que no utilizan.

Cuando se definen interfaces estos deben orientarse a una finalidad concreta, es mejor tener muchas interfaces con pocos métodos, que una interfaz con muchos métodos.



## D. Dependency Inversion - Inversión de dependencias

clases de alto nivel no deben depender de la clase es de bajo nivel. Ambos deben depender de abstracciones. Abstracciones no deben depender de los detalles. Los detalles deben depender de abstracciones.

* low-level classes: implementan operaciones básicas como interactuar con el disco, transferir datos sobre la red, conectarse a una db, etc.
* high-level classes: contienen la compleja lógica de negocios que dirige a  las clases de bajo nivel.

Utilizar abstracciones para realizar la interacción entre clases, es decir que las clases de alto nivel deben implementar la interface de alto nivel y las de bajo nivel herdan la interface para sobre escribirla.

esta regla va de la mano con la de O/C.