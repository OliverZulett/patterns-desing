# CATALOGO DE PATRONES DE DISEÑO



## Patrones de diseño creacionales

Los patrones creacionales provee mecanismos para la creación de objetos, que incrementan la flexibilidad y la reutilización de código.

* __Factory Method:__ Provee una interfaz para crear objetos en una superclase, permitiendo a las subclases alterar el tipo de objeto que será creado.

  ***Use el Método de fábrica cuando no sepa de antemano los tipos exactos y las dependencias de los objetos con los que su código debería funcionar.***

  

* __Abstract Factory:__ Permite producir familias de objetos relacionados sin especificar sus clases concretas.



* __Builder:__ Permite construir complejos objetos para a paso, El patrón permite producir diferentes tipos y representaciones de un objeto utilizando el mismo código de construcción.



* __Prototypes:__ Permite copiar objetos existentes sin sin hacer que el código dependa de sus clases.



* __Singleton:__ Asegura que una clase solo tenga una instancia, mientras que provee un punto de acceso global a la misma.



## Patrones de diseño estructurales

Los patrones de diseño estructurales explican como ensamblar objetos y clases en largas estructuras, manteniendo esta estructura flexible y eficiente.

* __Adapter:__ proporciona una interfaz indefinida que permite que los objetos con interfaces incompatibles colaboren
* __Bridge:__ Permite dividir una clase grande en un conjunto de clases estrechamente relacionadas en dos jerarquías separadas, abstracción e implementación que pueden ser desarrolladas independientemente de la otra.
* __Composite:__ Permite componer objetos en estructuras de árbol y luego trabajar con estas estructuras como si fueran objetos individuales.
* __Decorator:__ Permite adjuntar nuevos comportamientos al objeto colocando estos objetos dentro de objetos especiales de envoltura que contienen los comportamientos
* __Facade:__ Proporciona una interfaz simplificada a una librería, framework o a cualquier otro complejo conjunto de clases.
* __Flyweight:__ Permite ajustar objetos en la cantidad de RAM disponible compartiendo partes comunes de estados entre múltiples objetos, a cambio de mantener toda la información en cada objeto
* __Proxy (apoderado):__ Permite proveer un sustituto o marcador para otro objeto, Un apoderado controla el acceso al objeto original, lo que le permite realizar algo antes o después de que la solicitud llegue al objeto original. 



## Patrones de diseño de comportamiento

Los patrones de comportamiento están relacionados con los algoritmos y la asignación de responsabilidades entre objetos.

* __Chain of responsability:__ Permite pasar solicitudes a lo largo de una cadena de controladores. Al recibir una petición cada controlador decide procesar la solicitud o pasarla  al siguiente controlador de la cadena.
* __Command:__ Convierte un petición en un objeto independiente que contiene toda la informaron acerca de la petición. Esta transformación permite parametrizar métodos con diferente peticiones, retrasar o poner en la cola solicitudes de ejecución y soporte a operaciones imposibles de realizar
* __Iterator:__ Permite recorrer colecciones de elementos sin exponer sus representaciones subyacentes (listas, pilas, arboles, etc.)
* __Mediator:__ Reduce las dependencias caóticas entre objetos, restringe la comunicación directa entre objetos y los fuerza a colaborar solo mediante un objeto mediador.
* __Memento (Recuerdo):__ Permite guardar y restaurar estados de un objeto sin revelar detalles de su implementación.
* __Observer:__ Permite definir un mecanismo de suscripción para notificar a múltiples objetos sobre cualquier evento ocurrido sobre los objetos observados.
* __State:__ Permite cambiar el comportamiento de un objeto cuando cambio su estado interno, parece que el objeto cambio su clase. 
* __Strategy:__ Permite definir una familia de algoritmos, poner cada uno de ellos en una clase separada y hacer esos objetos intercambiables.
* __Template method:__ Define el esqueleto de un algoritmo en una superclase pero deja que las subclases sobrescriban pasos específicos de el algoritmo sin cambiar su estructura.
* __Visitor:__ Permite separar algoritmos de los objetos en los que opere

