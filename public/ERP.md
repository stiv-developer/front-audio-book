##pag:1
# Índice de contenido

:::indice
* Índice de contenido **4**
* Cómo leer este libro **6**
* Fundamentos de la POO **7**
  * Conceptos básicos de POO **8**
  * Los pilares de la POO **13**
  * Relaciones entre objetos **21**
* Introducción a los patrones de diseño **27**
  * ¿Qué es un patrón de diseño? **28**
  * ¿Por qué debería aprender sobre patrones? **21**
* Principios de diseño de software **34**
  * Características del buen diseño **35**
  * Principios del diseño **39**
    * Encapsula lo que varía **40**
    * Programa a una intefaz, no a una implementación **45**
    * Favorece la composición sobre la herencia **50**
  * Principios SOLID **54**
    * S:Principio de responsabilidad única **55**
    * O:Principio de abierto/cerrado **57**
    * L:Principio de sustitución de Liskov **61**
    * I:Principio de segregación de la intefaz **68**    
    * D:Principio de inversiín de la dependecia **71**
:::

##pag:2

:::indice
* El catálogo de patrones de diseño **75**
  * Patrones creacionales **76**
    * Factory Method / Método fábrica **78**
    * Abstract Factory / Fábrica abstracta **95**
    * Builder / Constructor **78**
    * Prototype / Prototipo **132**
    * Singleton / Instancia única **148**
  * Patrones creacionales **158**
    * Adapter / Adaptador **161**
    * Bridge / Puente **175**
    * Composite / Objeto compuesto **192**
    * Decorator / Decorador **206**
    * Facade / Fachada **226**
    * Flyweight / Peso mosca **237**
    * Proxy **252**
  * Patrones de comportamiento **266**
    * Chain of Responsibility / Cadena de responsabilidad **270**
    * Command / Comando **289**
    * Iterator / Iterador **310**
    * Mediator / Mediador **326**
    * Memento / Recuerdo **340**
    * Observer / Observador **358**
    * State / Estado **374**
    * Strategy / Estrategia **391**
    * Template Method / Método plantilla **406**
    * Visitor / Visitante **420**
:::

##pag:3
## Como leer este libro

Este libro contiene las descripciones de 22 patrones de diseño clásicos formulados por la “banda de los cuatro” (o simplemente GoF, por sus siglas en inglés) en 1994.

Cada capítulo explora un patrón particular. Por lo tanto, puedes leerlo de principio a fin, o ir eligiendo los patrones que te interesan.

Muchos patrones están relacionados, por lo que puedes saltar fácilmente de un tema a otro utilizando varios puntos de enlace. Al final de cada capítulo hay una lista de enlaces entre el patrón actual y otros. Si ves el nombre de un patrón que aún no habías visto, sigue leyendo, este patrón aparecerá en alguno de los capítulos siguientes.

Los patrones de diseño son universales. Por ello, todos los ejemplos de código de este libro están escritos en un pseudocódigo que no restringe el material a un lenguaje de programación particular.

Antes de estudiar los patrones, puedes refrescar tu memoria repasando los **términos clave de la programación orientada a objetos.** En ese capítulo también se explican los fundamentos de los diagramas UML (lenguaje unificado de modelado), lo que resulta de utilidad porque hay un montón de ellos en el libro. Por supuesto, si ya sabes todo esto, puedes proceder directamente a **aprender sobre patrones**.

##pag:4

# FUNDAMENTOS DE LA POO
## Conceptos básicos de POO

La **P**rogramación **o**rientada a **o**bjetos (POO) es un paradigma basado en el concepto de envolver bloques de información y su comportamiento relacionado, en lotes especiales llamados **objetos**, que se construyen a partir de un grupo de “planos” definidos por un programador, que se denominan **clases**.

#### Objetos, clases

¿Te gustan los gatos? Espero que sí, porque voy a intentar explicar los conceptos de POO utilizando varios ejemplos con gatos.

:::center
![Diagrama de Clases](/img/img-1.jpg)

Esto es un diagrama de clases en UML. Encontrarás muchos diagramas
como éste en el libro. Los nombres de las cosas en los diagramas están en
inglés, como lo estarían en un código real. Sin embargo, los comentarios y
las notas pueden estar en español.
:::

##pag:5

Digamos que tienes un gato llamado Óscar. Óscar es un objeto,
una instancia de la clase Gato . Cada gato tiene varios atributos estándar: nombre, sexo, edad, peso, color, comida favorita,
etc. Estos son los campos de la clase.

:::dotted-box
En este libro puedo referirme a los nombres de las clases
en español, aunque aparezcan en diagramas o en código en inglés (como hice con la clase Gato ). Quiero que
leas el libro como si tuviéramos una conversación hablada entre amigos. No quiero que te topes con palabras
extrañas cada vez que tenga que hacer referencia a alguna clase.
:::

Además, todos los gatos se comportan de forma similar: respiran, comen, corren, duermen y maúllan. Estos son los métodos
de la clase. Colectivamente, podemos referirnos a los campos
y los métodos como los miembros de su clase.


:::dotted-box
La información almacenada dentro de los campos del
objeto suele denominarse estado, y todos los métodos
del objeto definen su comportamiento.
:::

##pag:6

Luna, la gata de tu amigo, también es una instancia de la clase
Gato . Tiene el mismo grupo de atributos que Óscar. La diferencia está en los valores de estos atributos: su sexo es hembra, tiene un color diferente y pesa menos.

Por lo tanto, una clase es como un plano que define la estructura de los objetos, que son instancias concretas de esa clase.

#### Jerarquías de clase

Todo va muy bien mientras hablamos de una sola clase. Naturalmente, un programa real contiene más de una clase. Algunas de esas clases pueden estar organizadas en **jerarquías de clase**. Veamos lo que esto significa.

##pag:7

Digamos que tu vecino tiene un perro llamado Fido. Resulta que perros y gatos tienen mucho en común: nombre, sexo,
edad y color, son atributos tanto de perros como de gatos. Los
perros pueden respirar, dormir y correr igual que los gatos, por
lo que podemos definir la clase base Animal que enumerará
los atributos y comportamientos comunes.

:::center
Diagrama UML de una jerarquía de clases. Todas las clases de este
diagrama son parte de la jerarquía de clases :::tag Animal ::: .
:::

Una clase padre, como la que acabamos de definir, se denomina **superclase**. Sus hijas son las **subclases**. Las subclases heredan

##pag:8

el estado y el comportamiento de su padre y se limitan
a definir atributos o comportamientos que son diferentes. Por
lo tanto, la clase :::tag Gato ::: contendrá el método :::tag maullar ::: y, la
clase :::tag Perro ::: , el método :::tag ladrar ::: .

Asumiendo que tenemos una tarea relacionada, podemos ir
más lejos y extraer una clase más genérica para todos los
:::tag Organismo ::: vivos, que se convertirá en una superclase para
:::tag Animal ::: y :::tag Planta ::: . Tal pirámide de clases es una **jerarquía**.
En esta jerarquía, la clase :::tag Gato ::: lo hereda todo de las clases
:::tag Animal ::: y :::tag box Organismo ::: .

:::center
En un diagrama UML las clases se pueden simplificar si es más importante
mostrar sus relaciones que sus contenidos.
:::

Las subclases pueden sobrescribir el comportamiento de los
métodos que heredan de clases padre. Una subclase puede sustituir completamente el comportamiento por defecto o limitarse a mejorarlo con material adicional.

##pag:9

# Los pilares de la POO

La programación orientada a objetos se basa en cuatro pilares, conceptos que la diferencian de otros paradigmas de
programación.

### Abstracción

La mayoría de las veces, cuando creas un programa con POO,
das forma a los objetos del programa con base a objetos del
mundo real. Sin embargo, los objetos del programa no representan a los originales con una precisión del 100 % (y rara vez
es necesario que lo hagan). En su lugar, tus objetos tan solo copian atributos y comportamientos de objetos reales en un contexto específico, ignorando el resto.

Por ejemplo, una clase :::tag Avión ::: probablemente podría existir
en un simulador de vuelo y en una aplicación de reserva de
vuelos. Pero, en el primer caso, contendría información relacinada

##pag:10
con el propio vuelo, mientras que en la segunda clase
sólo habría que preocuparse del mapa de asientos y de los
asientos que estén disponibles.

:::center
Distintos modelos del mismo objeto del mundo real.
:::

La *Abstracción* es el modelo de un objeto o fenómeno del
mundo real, limitado a un contexto específico, que representa
todos los datos relevantes a este contexto con gran precisión,
omitiendo el resto.

### Encapsulación

Para arrancar el motor de un auto, tan solo debes girar una
llave o pulsar un botón. No necesitas conectar cables bajo el
capó, rotar el cigüeñal y los cilindros, e iniciar el ciclo de potencia

##pag:11

del motor. Estos detalles se esconden bajo el capó del
auto. Sólo tienes una interfaz simple: un interruptor de encendido, un volante y unos pedales. Esto ilustra el modo en que
cada objeto cuenta con una **interfaz**: una parte pública de un
objeto, abierta a interacciones con otros objetos.

La *encapsulación* es la capacidad que tiene un objeto de esconder partes de su estado y comportamiento de otros objetos, exponiendo únicamente una interfaz limitada al resto del
programa.

Encapsular algo significa hacerlo :::tag privado ::: y, por ello, accesible únicamente desde dentro de los métodos de su propia
clase. Existe un modelo un poco menos restrictivo llamado
:::tag protegido ::: que hace que un miembro de una clase también
esté disponible para las subclases.

Las interfaces y las clases y métodos abstractos de la mayoría de los lenguajes de programación se basan en conceptos
de abstracción y encapsulación. En los lenguajes modernos de
programación orientada a objetos, el mecanismo de la :::tag interfaz ::: (declarado normalmente con la palabra clave interface
o :::tag protocol ::: ) te permite definir contratos de interacción entre
objetos. Ésta es una de las razones por las que las interfaces
sólo se interesan por los comportamientos de los objetos, y también el motivo por el que no puedes declarar un campo en
una interfaz.

##pag:12

:::dotted-box
El hecho de que la palabra *interfaz* se refiera a la parte
pública de un objeto, mientras que también existe el tipo
:::tag interface ::: en la mayoría de los lenguajes de programación, 
resulta muy confuso. Estoy contigo.
:::

Imagina que tienes una interfaz :::tag TransporteAéreo ::: con un método
vuelo :::tag (origen, destino, pasajeros). :::

![Diagrama de Clases](/img/img-diagrama-uml-de-varias-clases-implementando-una-interfaz.jpg)

:::center
Diagrama UML de varias clases implementando una interfaz.
:::

Al diseñar un simulador de transporte aéreo, puedes restringir la clase
:::tag Aeropuerto ::: para que sólo funcione con objetos que

##pag:13

implementan la interfaz tendrás la certeza de que cualquier objeto pasado a un objeto del aeropuerto, 
ya sea un un maldito :::tag Avión ::: , un :::tag Helicóptero ::: o hasta
:::tag GrifoDomesticado ::: si quieres, podrá aterrizar o despegar de este tipo de aeropuerto.
Puedes cambiar la implementación del método :::tag volar ::: en
esas clases del modo que quieras. Siempre y cuando la firma
del método sea la misma que se declaró en la interfaz, todas
las instancias de la clase :::tag Aeropuerto ::: pueden funcionar bien
con tus objetos voladores.

### Herencia

La *herencia* es la capacidad de crear nuevas clases sobre otras
existentes. La principal ventaja de la herencia es la reutiliza
ción de código. Si quieres crear una clase ligeramente diferen
te a una ya existente, no hay necesidad de duplicar el código.
En su lugar, extiendes la clase existente y colocas la funciona
lidad adicional dentro de una subclase resultante que hereda
los campos y métodos de la superclase.

La consecuencia del uso de la herencia es que las subclases
tienen la misma interfaz que su clase padre. No puedes escon
der un método en una subclase si se declaró en la superclase.
También debes implementar todos los métodos abstractos, au
nque no tengan sentido en tu subclase.

##pag:14

:::center
![Diagrama de Clases](/img/img-herencia-diagrama-uml.jpg)

Diagrama UML de extensión de una única clase en comparación con la
implementación de múltiples interfaces al mismo tiempo.
:::

En la mayoría de los lenguajes de programación una subclase
puede extender una única superclase. Por otro lado, cualquier
clase puede implementar varias interfaces al mismo tiempo.
Pero, como expliqué antes, si una superclase implementa una
interfaz, todas sus subclases deben implementarla también.

### Polimorfismo

Veamos algunos ejemplos con animales. La mayoría de los
:::tag Animal ::: puede emitir sonidos. Podemos anticipar que todas
las subclases necesitarán sobrescribir el método base
:::tag emitirSonido ::: para que cada subclase pueda emitir el soni
do correcto; por lo tanto, podemos declararlo *abstracto* directa
mente. Esto nos permite omitir cualquier implementación por
defecto del método en la superclase, pero fuerza a todas las
subclases a establecer las suyas propias.

##pag:15
:::center
![Diagrama de Clases](/img/img-polimorfismo-diagrama-uml.jpg)

Estos son comentarios UML. Normalmente, explican detalles de implementación de las clases o métodos dados.
:::

Imagina que ponemos varios gatos y perros dentro de una
gran bolsa. Después, con los ojos tapados, vamos sacando los
animales de la bolsa, de uno en uno. Al sacar un animal, no
sabemos con seguridad lo que es. Pero si lo abrazamos lo suficiente, el animal emitirá un sonido específico de alegría, dependiendo de su clase concreta.

##pag:16

El programa no conoce el tipo concreto del objeto contenido
dentro de la variable
a , pero, gracias al mecanismo especial
llamado polimorfismo, el programa puede rastrear la subclase
del objeto cuyo método está siendo ejecutado, y ejecutar el co
mportamiento adecuado.

El *polimorfismo* es la capacidad que tiene un programa de de
tectar la verdadera clase de un objeto e invocar su impleme
ntación, incluso aunque su tipo real sea desconocido en el
contexto actual.

También puedes pensar en el polimorfismo como la capaci
dad de un objeto para “fingir” ser otra cosa, normalmente una
clase que extiende o una interfaz que implementa. En nuest
ro ejemplo, los perros y gatos de la bolsa fingen ser animales
genéricos.

##pag:17

## Relaciones entre objetos

Además de la *herencia* y la *implementación*, que ya vimos, hay
otros tipos de relaciones entre objetos de las que aún no
hemos hablado.

:::center

Dependencia en UML. El profesor depende de los materiales del curso.
:::

La *dependencia* es el tipo de relación más básica y débil entre
clases. Existe una dependencia entre dos clases cuando ciertos
cambios en la definición de una clase puede provocar modificaciones en otra. La dependencia ocurre normalmente cuando
utilizas nombres de clases concretas en tu código. Por ejemp
lo, al especificar tipos en las firmas de un método, al instanciar
objetos mediante llamadas al constructor, etc. Puedes hacer
más débil una dependencia haciendo que tu código dependa
de interfaces o clases abstractas en lugar de clases concretas.

Normalmente, un diagrama UML no muestra todas las depe
ndencias; hay demasiadas en cualquier código real. En lugar
de contaminar el diagrama con dependencias, debes ser muy
selectivo y mostrar únicamente aquellas que son importantes
para lo que sea que estás comunicando.

##pag:17

### Asociación

:::center
Asociación en UML. El profesor se comunica con los estudiantes.
:::

La *asociación* es una relación en la que un objeto utiliza o interactúa con otro. En diagramas UML, la relación de asociación se muestra mediante una flecha simple desde un objeto y
apuntando hacia el objeto que utiliza. Por cierto, es totalmente normal tener una asociación bidireccional. En este caso, la flecha tiene una punta en cada extremo. La asociación puede
verse como un tipo especializado de dependencia, en la que
un objeto siempre tiene acceso a los objetos con los que interactúa, mientras que la dependencia simple 
no establece un vínculo permanente entre los objetos.

En general, se utiliza la asociación para representar algo como
un campo en una clase. El vínculo siempre está ahí, en cuanto a que siempre puedes pedir una orden para su cliente. Pero no siempre tiene que ser un campo. Si estás modelando tus clase desde una perspectiva de interfaz, puede simplemente indicar la presencia de un método que devolverá el cliente de la orden.

Para asentar tu comprensión de la diferencia entre asociación y dependencia, veamos un ejemplo combinado. Imagina que tenemos una clase :::tag Profesor ::: :

##pag:17

Observa el método enseñar . Toma un argumento de la clase Curso , que después se utiliza en el cuerpo del método. Si alguien cambia el método obtenerConocimientos de la clase
Curso (es decir, si cambia su nombre o añade algún parámetro requerido, etc.) nuestro código se descompondrá. Esto se llama dependencia.

Ahora observa el campo :::tag Estudiante ::: y cómo se utiliza en el
método :::tag enseñar ::: . Podemos afirmar con seguridad que la clase
Estudiante también es una dependencia para el si el método :::tag Profesor ::: :
recordar cambia, el código de Profesor se romperá. No obstante, como el campo :::tag Estudiante ::: siempre
está accesible para cualquier método de :::tag Profesor ::: , la clase
:::tag Estudiante ::: no es sólo una dependencia, sino también una asociación.

##pag:18

### Agregación

:::center
Agregación en UML. Los departamentos contienen profesores.
:::

La agregación es un tipo especializado de asociación que representa relaciones “uno a muchos”, “muchos a muchos” o “todo a parte” entre múltiples objetos, mientras que una asociación
simple describe relaciones entre un par de objetos.

Normalmente, con la agregación, un objeto “tiene” un grupo de otros objetos y sirve como contenedor o colección. El componente puede existir sin el contenedor y puede vincularse a varios contenedores al mismo tiempo. En UML, la relación de agregación se muestra por una línea con un diamante vacío en el lado del contenedor y una flecha en el extremo apuntando hacia el componente.

Mientras hablamos de relaciones entre objetos, ten en cuenta que UML representa relaciones entre *clases*. Esto significa que un objeto universidad puede consistir en varios departamentos aunque solo veas un “bloque” por cada entidad en el diagrama. La notación UML puede representar cantidades en ambos lados de las relaciones, pero no hay problema en omitirlas si están claras por el contexto.

##pag:19

### Composición

:::center
Composición en UML. La universidad consta de departamentos.
:::

La composición es un tipo específico de agregación en la que un objeto se compone de una o más instancias del otro. La diferencia entre ésta y otras relaciones está en que el componente sólo puede existir como parte del contenedor. En UML, la relación de composición se representa igual que la de agregación, pero con un diamante relleno en la base de la flecha.

Observa que muchas personas utilizan a menudo el término “composición” cuando en realidad se refieren tanto a la agregación como a la composición. El ejemplo más notorio es el famoso principio “escoge composición antes que herencia”. No es que la gente ignore la diferencia, sino más bien que la palabra
“composición” (por ejemplo, “composición de objetos”) suena más natural en el idioma inglés.

### La visión global

Ahora que conocemos todos los tipos de relaciones entre objetos, veamos cómo se conectan entre sí. Esperemos que esto te ayude a responder preguntas como: “¿cuál es la diferencia entre agregación y composición?” o “¿la herencia es un tipo de dependencia?”.

##pag:20

* **Dependencia**: La clase A puede verse afectada por cambios en la clase B.

* **Asociación**: El objeto A conoce el objeto B. La clase A depende de B.

* **Agregación**: El objeto A conoce el objeto B y consiste en B. La clase A depende de B.

* **Composición**: El objeto A conoce el objeto B, consiste en B y gestiona el ciclo vital de B. La clase A depende de B.

* **Implementación**: La clase A define métodos declarados en la interfaz B. Los objetos A pueden tratarse como B. La clase A depende de B.

* **Herencia**: La clase A hereda la interfaz y la implementación de la clase B, pero puede extenderla. El objeto A puede tratarse como B. La clase A depende de B.

:::center
![Diagrama de Clases](/img/img-relaciones-entre-objetos-y-clases-de-la-mas-debil.jpg)

Relaciones entre objetos y clases: de la más débil a la más fuerte.
:::

##pag:21

# INTRODUCCIÓN A LOS PATRONES

##pag:22

## ¿Qué es un patrón de diseño?

Los **patrones de diseño** son soluciones habituales a problemas que ocurren con frecuencia en el diseño de software. Son como planos prefabricados que se pueden personalizar para resolver un problema de diseño recurrente en tu código.

No se puede elegir un patrón y copiarlo en el programa como si se tratara de funciones o bibliotecas ya preparadas. El patrón no es una porción específica de código, sino un concepto general para resolver un problema particular. Puedes seguir los detalles del patrón e implementar una solución que encaje con las realidades de tu propio programa.

A menudo los patrones se confunden con algoritmos porque ambos conceptos describen soluciones típicas a problemas conocidos. Mientras que un algoritmo siempre define un grupo claro de acciones para lograr un objetivo, un patrón es una descripción de más alto nivel de una solución. El código del mismo patrón aplicado a dos programas distintos puede ser diferente.

Una analogía de un algoritmo sería una receta de cocina: ambos cuentan con pasos claros para alcanzar una meta. Por su parte, un patrón es más similar a un plano, ya que puedes observar cómo son su resultado y sus funciones, pero el orden exacto de la implementación depende de ti.

##pag:23

## ¿En qué consiste el patrón?

La mayoría de los patrones se describe con mucha formalidad para que la gente pueda reproducirlos en muchos contextos. Aquí tienes las secciones que suelen estar presentes en la de scripción de un patrón:

* El **propósito** del patrón explica brevemente el problema y la
solución.

* La **motivación** explica en más detalle el problema y la solución
que brinda el patrón.

* La **estructura** de las clases muestra cada una de las partes del
patrón y el modo en que se relacionan.

* El **ejemplo de código** enunodelos lenguajes de programación
populares facilita la asimilación de la idea que se esconde tras
el patrón.

Algunos catálogos de patrones enumeran otros detalles útiles,
como la aplicabilidad del patrón, los pasos de implementación
y las relaciones con otros patrones.

## Clasificación de los patrones

Los patrones de diseño varían en su complejidad, nivel de detalle y escala de aplicabilidad al sistema completo que se diseña. Me gusta la analogía de la construcción de carreteras: puedes hacer más segura una intersección instalando semáforos

##pag:24

o construyendo un intercambiador completo de varios ni
veles con pasajes subterráneos para peatones.

Los patrones más básicos y de más bajo nivel suelen llamarse idioms. Normalmente se aplican a un único lenguaje de programación.

Los patrones más universales y de más alto nivel son los patrones de arquitectura. Los desarrolladores pueden implementar estos patrones prácticamente en cualquier lenguaje. Al contrario que otros patrones, pueden utilizarse para diseñar la arquitectura de una aplicación completa.

Además, todos los patrones pueden clasificarse por su propósito. Este libro cubre tres grupos generales de patrones:

* Los **patrones creacionales** proporcionan mecanismos de creación de objetos que incrementan la flexibilidad y la reutilización de código existente.

* Los **patrones estructurales** explican cómo ensamblar objetos y clases en estructuras más grandes a la vez que se mantiene la flexibilidad y eficiencia de la estructura.

* Los **patrones de comportamiento** se encargan de una comunicación efectiva y la asignación de responsabilidades entre objetos.

##pag:25

## ¿Quién inventó los patrones de diseño?

Esa es una buena, aunque imprecisa pregunta. Los patrones de diseño no son conceptos opacos y sofisticados, al contrario. Los patrones son soluciones habituales a problemas comunes en el diseño orientado a objetos. Cuando una solución se repite una y otra vez en varios proyectos, al final alguien le pone un nombre y explica la solución en detalle. Básicamente, así es como se descubre un patrón.

El concepto de los patrones fue descrito por Christopher Alexander en El lenguaje de patrones1 . El libro habla de un “lenguaje” para diseñar el entorno urbano. Las unidades de este lenguaje son los patrones. Pueden describir lo altas que tienen que ser las ventanas, cuántos niveles debe tener un edificio, cuan grandes deben ser las zonas verdes de un barrio, etcétera.

La idea fue recogida por cuatro autores: Erich Gamma, John Vlissides, Ralph Johnson y Richard Helm. En 1995, publicaron Patrones de diseño 2 , en el que aplicaron el concepto de los patrones de diseño a la programación. El libro presentaba 23
patrones que resolvían varios problemas del diseño orientado a objetos y se convirtió en un éxito de ventas con rapidez. Al tener un título tan largo en inglés, la gente empezó a llamarlo “el libro de la ‘gang of four’ (banda de los cuatro)”, lo que pronto se abrevió a “el libro GoF”.

##pag:26

Desde entonces se han descubierto decenas de nuevos patrones orientados a objetos. La “metodología del patrón” se hizo muy popular en otros campos de la programación, por lo que hoy en día existen muchos otros patrones no relacionados con el diseño orientado a objetos.

##pag:27

## ¿Por qué debería aprender sobre patrones?

La realidad es que podrías trabajar durante años como programador sin conocer un solo patrón. Mucha gente lo hace. Incluso en ese caso, podrías estar implementando patrones sin saberlo. Así que, ¿por qué dedicar tiempo a aprenderlos?

* Los patrones de diseño son un juego de herramientas de **soluciones comprobadas** a problemas habituales en el diseño de software. Incluso aunque nunca te encuentres con estos problemas, conocer los patrones sigue siendo de utilidad, porque te enseña a resolver todo tipo de problemas utilizando principios del diseño orientado a objetos.

* Los patrones de diseño definen un lenguaje común que puedes utilizar con tus compañeros de equipo para comunicaros de forma más eficiente. Podrías decir: “Oh, utiliza un singleton para eso”, y todos entenderían la idea de tu sugerencia. No habría necesidad de explicar qué es un singleton si conocen el patrón y su nombre.

##pag:28

# PRINCIPIOS DE DISEÑO DE SOFTWARE

##pag:29

## Características del buen diseño

Antes de proceder con los patrones propiamente dichos, discutamos el proceso del diseño de arquitectura de software: cosas que buscar y cosas que evitar.

### Reutilización de código

Costos y tiempo son dos de los parámetros más valiosos a la hora de desarrollar cualquier producto de software. Dedicar menos tiempo al desarrollo se traduce en entrar en el mercado antes que la competencia. Unos costos más bajos en el desarrollo significa que habrá más dinero disponible para marketing y un alcance más amplio a clientes potenciales.

La **reutilización de código** es una de las formas más habituales de reducir costos de desarrollo. El propósito es obvio: en lugar de desarrollar algo una y otra vez desde el principio, ¿por qué no reutilizar el código existente en nuevos proyectos?

La idea se ve bien sobre el papel, pero resulta que hacer que el código existente funcione en un nuevo contexto, a menudo requiere de un esfuerzo adicional. Acoplamientos fuertes entre componentes, dependencias de clases concretas en lugar de interfaces, operaciones incrustadas en el código... Todo esto reduce la flexibilidad del código y hace que sea más difícil de reutilizar.

Utilizar patrones de diseño es una de las maneras de aumentar la flexibilidad de los componentes de software y hacerlos más fáciles de reutilizar. Sin embargo, en ocasiones esto tiene el precio de complicar los componentes.

Aquí tienes un apunte de sabiduría de Erich Gamma 1 , uno de los padres fundadores de los patrones de diseño, sobre el papel que estos juegan en la reutilización de código:

:::dotted-box
“
Yo veo tres niveles de reutilización. 

En el nivel más bajo, reutilizas clases: bibliotecas de clase, contenedores, quizá algunos “equipos” de clases, como contenedor/iterador.

Los frameworks se encuentran en el nivel superior. Intentan destilar tus decisiones de diseño. Identifican las abstracciones clave para resolver un problema, las representan con clases y definen relaciones entre ellas. JUnit es un pequeño framework, por ejemplo. Es el “¡Hola, mundo!” de los frameworks. Tiene :::tag Test ::: , :::tag TestCase ::: , :::tag TestSuite ::: y las relaciones definidas. 

Normalmente, un framework es más tosco que una única clase. Además, te enganchas a los frameworks creando subclases en alguna parte. Utilizan el llamado principio de Hollywood de “no nos llames, nosotros te llamamos a ti”. El framework te permite definir tu comportamiento personalizado y ya te llamará cuando sea tu turno de hacer algo. Lo mismo sucede con JUnit,
:::

##pag:30

:::dotted-box
¿verdad? Te llama cuando quiere ejecutar una prueba para ti, pero el resto sucede en el *framework*.

También hay un nivel intermedio. Aquí es donde veo patrones. Los patrones de diseño son más pequeños y más abstractos que los *frameworks*. En realidad, son una descripción sobre cómo pueden relacionarse un par de clases e interactuar entre sí. El nivel de reutilización aumenta cuando pasas de clases a patrones y por último a *frameworks*.

Lo bueno de esta capa intermedia es que, a menudo, los patrones ofrecen la reutilización de un modo menos arriesgado que los *frameworks*. Crear un *framework* comprende un alto riesgo y una inversión considerable. Los patrones te permiten reutilizar ideas y conceptos de diseño con independencia del código concreto.
:::

### Extensibilidad

El **cambio** es lo único constante en la vida de un programador.

* Lanzasteunvideojuego para Windows, pero ahora la gente de manda una versión macOS.

* Creaste un *framework* GUI con botones cuadrados, pero meses después los botones redondos son tendencia.

* Diseñaste una espectacular arquitectura para un sitio web de comercio electrónico, pero poco después los clientes piden una función que les permita aceptar pedidos por teléfono.

##pag:31

Cada desarrollador de software puede contar decenas de historias similares. Hay muchas razones para esto.

En primer lugar, comprendemos mejor el problema una vez que comenzamos a resolverlo. A menudo, para cuando finalizamos la primera versión de una aplicación, estamos listos para reescribirla desde el principio porque entonces comprendemos mucho mejor diversos aspectos del problema. También creciste profesionalmente y tu propio código te parece basura.

Algo fuera de tu control ha cambiado. Éste es el motivo por el que tantos equipos de desarrollo saltan de sus ideas originales hacia algo nuevo. Todos aquellos que se basaron en Flash para una aplicación online han rehecho o migrado su código desde que, navegador tras navegador, todos dejan de soportar Flash.

La tercera razón es que los postes de la portería se mueven. Tu cliente quedó encantado con la versión actual de la aplicación, pero ahora quiere once “pequeños” cambios para que haga otras cosas que nunca te mencionó en las primeras sesiones de planificación. No se trata de cambios frívolos: tu excelente primera versión le ha demostrado que todavía es posible mucho más. Hay un lado positivo: si alguien te pide cambiar algo de tu aplicación, eso significa que todavía le importa a alguien.

Por este motivo, todos los desarrolladores experimentados se preparan para posibles cambios futuros cuando diseñan la arquitectura de una aplicación.

##pag:32

## Principios del diseño

¿Qué es un buen diseño de software? ¿Cómo medimos su calidad? ¿Qué prácticas debemos llevar a cabo para lograrlo? ¿Cómo podemos hacer nuestra arquitectura flexible, estable y fácil de comprender?

Éstas son las grandes preguntas, pero, lamentablemente, las respuestas varían en función del tipo de aplicación que estés creando. No obstante, existen varios principios universales del diseño de software que pueden ayudarte a responder estas preguntas para tu propio proyecto. La mayoría de los patrones de diseño tratados en este libro se basa en estos principios.

##pag:33

### Encapsula lo que varía

:::dotted-box
Identifica los aspectos de tu aplicación que varían y se páralos de los que se mantienen inalterables.
:::

El objetivo principal de este principio es minimizar el efecto provocado por los cambios.

Imagina que tu programa es un barco y los cambios son horribles minas escondidas bajo el agua. Si el barco golpea una mina, se hunde.

Sabiendo esto, puedes dividir el casco del barco en compartimentos individuales que puedan sellarse para limitar los daños a un único compartimento. De esto modo, si el barco golpea una mina, puede permanecer a flote.

Del mismo modo, puedes aislar las partes del programa que varían, en módulos independientes, protegiendo el resto del código frente a efectos adversos. Al hacerlo, dedicarás menos tiempo a lograr que el programa vuelva a funcionar, implementando y probando los cambios. Cuanto menos tiempo dediques a realizar cambios, más tiempo tendrás para implementar funciones.

##pag:34

### Encapsulación a nivel del método

Digamos queestás creandoun sitiowebde comercio electrónico. En alguna parte de tu código, hay un método
:::tag obtenerTotaldelPedido ::: quecalculauntotaldelpedido, impuestos incluidos.

Podemos anticipar que el código relacionado con los impuestos tendrá que cambiar en el futuro.La tasa impositiva dependerá de cada país, estado, o incluso ciudad en la que resida el cliente, y la fórmula puede variar a lo largo del tiempo con base a nuevas leyes o regulaciones. Esto hará que tengas que cambiar el método :::tag obtenerTotaldelPedido ::: bastante a menudo. Pero incluso el nombre del método sugiere que no le importa cómo se calcula elimpuesto.

:::center
ANTES: el código de cálculo del impuesto está mezclado con el resto del código del método.
:::

##pag:35

Puedesextraerlalógicadecálculodel impuestoaunmétodo
separado, escondiéndolo del métodooriginal.

:::center
DESPUÉS: puedes obtener la tasa impositiva invocando un método designado.
:::

Los cambios relacionados con el impuesto quedan aislados dentro de un único método. Además, si la lógica de cálculo del impuesto se complica demasiado,ahoraesmássencillomoverla a una clase separada.

##pag:36

### Encapsulación a nivel de la clase

Con el tiempo puedes añadir más y más responsabilidades a un método que solía hacer algo sencillo. Estos comportamientos añadidos suelen venir con sus propios campos y métodos de ayuda que acaban nublando la responsabilidad principal de la clase contenedora. Si se extrae todo a una nueva clase se puede conseguir mayor claridad y sencillez.

:::center
ANTES: cálculo del impuesto en la clase :::tag Pedido ::: .
:::

##pag:36

Los objetos de la clase :::tag Pedido ::: delegan todo el trabajo relacionado con el impuesto a un objeto especial dedicado justo a eso.

:::center
DESPUÉS: el cálculo del impuesto se esconde de la clase :::tag Pedido ::: .
:::

##pag:37

# Programa a una interfaz, no a una implementación

:::dotted-box
Programa a una interfaz, no a una implementación. De
pende de abstracciones, no de clases concretas.
:::

Sabrás que el diseño es lo suficientemente flexible si puedes
extenderlo con facilidad y sin descomponer el código existe
nte. Vamos a asegurarnos de que esta afirmación es correc
ta viendo un nuevo ejemplo con gatos. Un
Gato que puede
comer cualquier comida es más flexible que uno que sólo
puede comer salchichas. Al primer gato le puedes dar sal
chichas porque éstas son un subgrupo de “cualquier comida”,
pero puedes extender el menú de ese gato con cualquier otra
comida.

Cuando quieres hacer que dos clases colaboren, puedes come
nzar por hacer una dependiente de la otra. Caramba, yo mismo
suelo empezar haciendo eso. Sin embargo, hay otra forma más
f
lexible de establecer la colaboración entre objetos:

1. Determina lo que necesita exactamente un objeto del otro: ¿qué métodos ejecuta?

2. Describe esos métodos en una nueva interfaz o clase abstracta.

3. Haz que la clase que es una dependencia implemente esta interfaz.

##pag:38

4. Ahora, haz la segunda clase dependiente de esta interfaz en lugar de la clase concreta. Todavía puedes hacerlo funcionar con objetos de la clase original, pero ahora la conexión es mucho más flexible.

:::center
Antes y después de extraer la interfaz. El código de la derecha es más flexible que el de la izquierda, pero también es más complicado.
:::

Tras hacer este cambio, probablemente no notarás un beneficio inmediato. Por el contrario, el código se ha vuelto más complicado de lo que era antes. No obstante, si consideras que éste puede ser un buen punto de extensión para alguna funcionalidad adicional, o que otras personas que utilizan tu código pueden desear extenderlo aquí, entonces adelante con ello.

##pag:39

### Ejemplo

Veamos otro ejemplo que ilustra que trabajar con objetos a través de interfaces puede ser más beneficioso que depender de sus clases concretas. Imagina que estás creando un simulador de empresa de desarrollo de software. Tienes distintas clases que representan varios tipos de empleados.

:::center
ANTES: todos las clases están fuertemente acopladas.
:::

Al principio, la clase :::tag Empresa ::: está fuertemente acoplada a clases de empleados concretos. Sin embargo, a pesar de la diferencia en sus implementaciones, podemos generalizar varios

##pag:40

métodos relacionados con el trabajo y extraer después una interfaz común para todas las clases de empleado.

Después de hacer esto, podemos aplicar el polimorfismo dentro de la clase :::tag Empresa ::: , tratando varios objetos de :::tag empleado ::: a través de la interfaz Empleado .

:::center
MEJOR: el polimorfismo nos ayudó a simplificar el código, pero el resto de la clase :::tag Empresa ::: aún depende de las clases de empleados concretos.
:::

La clase :::tag Empresa ::: sigue acoplada a las clases de empleado. Esto no es bueno, porque si introducimos nuevos tipos de empresas que funcionan con otros tipos de empleados, necesitaremos sobrescribir la mayor parte de la clase :::tag Empresa ::: en lugar de reutilizar ese código.

Para resolver este problema, podemos declarar el método para obtener empleados como abstractos. Cada empresa concreta

##pag:41

implementará este método de forma diferente, creando única
mente los empleados que necesita.

:::center
DESPUÉS: el método primario de la clase :::tag Empresa ::: es independiente de clases de empleado concretos. Los objetos de empleado se crean en subclases de empresas concretas.
:::

Tras este cambio, la clase :::tag Empresa ::: se vuelve independiente de varias clases de empleado. Ahora puedes extender esta clase e introducir nuevos tipos de empresas y empleados, a la vez que reutilizas una parte de la clase base empresa. Extender la clase base empresa no descompone el código existente que ya se basa en ella.

Por cierto, ¡acabas de ver la aplicación de un patrón de diseño en acción! Esto es un ejemplo del patrón *Factory Method*. No te preocupes: lo explicaremos en detalle más adelante.

##pag:42

# Favorece la composición sobre la herencia

La herencia es probablemente la forma más obvia y sencilla de
reutilizar código entre clases. Tienes dos clases con el mismo
código. Creas una clase base común para estas dos clases y co
locas dentro el código similar. ¡Pan comido!

Lamentablemente, la herencia tiene sus contras, que a menu
do no resultan aparentes hasta que tu programa tiene tonela
das de clases y cambiarlo todo resulta muy complicado. Aquí
tienes una lista de esos problemas.

* **Una subclase no puede reducir la interfaz de la superclase.** Tienes que implementar todos los métodos abstractos de la clase padre, incluso aunque no vayas a usarlos.

* **Al sobrescribir métodos debes asegurarte de que el nuevo co
mportamiento sea compatible con el de base.** Es importante porque los objetos de la subclase pueden pasarse a cualquier código que espere objetos de la superclase y no quieres que ese código se rompa.

* **La herencia rompe la encapsulación de la superclase** porque los detalles internos de la clase padre se hacen disponibles para la subclase. Puede darse una situación opuesta en la que un programador hace que una superclase conozca algunos detalles talles de las subclases, con el objetivo de que las siguientes
extensiones sean más sencillas.

##pag:43

* **Las subclases están fuertemente acopladas a superclases.** Cualquier cambio en una superclase puede descomponer la funcionalidad de las subclases.

* **Intentar reutilizar código mediante la herencia puede conducir a la creación de jerarquías de herencia paralelas.** Normalmente, la herencia sucede en una única dimensión. Pero cuando hay dos o más dimensiones, debes crear muchas combinaciones de clases, hinchando la jerarquía de clases hasta un tamaño ridículo.

Existe una alternativa a la herencia llamada composición. Mie ntras que la herencia representa la relación “is a” (es un/a) entre clases (un auto es un medio de transporte), la composición se basa en la relación “tiene un/a” (un auto tiene un motor).

Debo mencionar que este principio también se aplica a la agregación, una variante más relajada de la composición en la que un objeto puede contener una referencia al otro pero no gestiona su ciclo vital. Aquí tienes un ejemplo: un auto tiene un conductor pero éste puede utilizar otro auto o caminar *sin el auto.*

##pag:44

### Ejemplo

Imagina que debes crear una aplicación de un catálogo para
un fabricante de automóviles. La empresa fabrica autos y ca
miones; pueden ser eléctricos o de gasolina; todos los mode
los pueden tener controles manuales o piloto automático.

:::center
HERENCIA: extender una clase en varias dimensiones (tipo de carga × tipo de motor × tipo de navegación) puede provocar una explosión combinatoria de subclases.
:::

Como puedes ver, cada parámetro adicional resulta en la multiplicación del número de subclases. Hay mucho código duplicado entre subclases porque una subclase no puede extender dos clases al mismo tiempo.

##pag:45

Puedes resolver este problema con la composición. En lugar de que los objetos de auto implementen un comportamiento por su cuenta, pueden delegarlo a otros objetos.

La ventaja adicional es que puedes sustituir un comporta miento durante el tiempo de ejecución. Por ejemplo, puedes sustituir un objeto de motor vinculado a un objeto de auto asignando simplemente un objeto de motor distinto al auto.

:::center
COMPOSICIÓN: diferentes “dimensiones” de funcionalidad extraídas para ponerse dentro de sus propias jerarquías de clases..
:::

Esta estructura de clases se parece al patrón Strategy, que explicaremos más adelante en este libro.

##pag:46

# Principios SOLID

Ahora que conoces los principios básicos de diseño, veamos cinco que se conocen popularmente como los principios SOLID. Robert Martin los presentó en el libro *Desarrollo ágil de software: principios, patrones y prácticas*1.

*SOLID* es una regla mnemotécnica para cinco principios de diseño ideados para hacer que los diseños de software sean más comprensibles, flexibles y fáciles de mantener.

Como con todo en la vida, utilizar estos principios de forma descuidada puede hacer más mal que bien. El costo de aplicar estos principios en la arquitectura de un programa es que puede hacerlo más complicado de lo que debería. Dudo que exista un producto de software exitoso en el que se apliquen todos estos principios al mismo tiempo. Aspirar a estos principios es bueno, pero intenta siempre ser pragmático y no tomes todo lo escrito aquí como un dogma.

##pag:47

## Principio de responsabilidad única
# Single Responsibility Principle

:::dotted-box
Una clase sólo debe tener una razón para cambiar.
:::

Intenta hacer a cada clase responsable de una única parte de la funcionalidad proporcionada por el software, y haz que esa responsabilidad quede totalmente encapsulada por (también puedes decir escondida dentro de) la clase.

El principal objetivo de este principio es reducir la complejidad. No hace falta que inventes un diseño sofisticado para un programa que tiene unas 200 líneas de código. Con un puñado de buenos métodos te irá bien. Los verdaderos problemas surgen cuando tu programa crece y cambia constantemente. En cierto punto, las clases se vuelven tan grandes que ya no puedes recordar sus detalles. La navegación del código se ralentiza hasta ir a paso de tortuga y tienes que recorrer clases enteras o incluso un programa completo para encontrar algo específico. El número de entidades en el programa supera tu capacidad cerebral y sientes que pierdes el control sobre el código.

Hay más: si una clase hace demasiadas cosas, tienes que cambiarla cada vez que una de esas cosas cambia. Al hacerlo, te arriesgas a descomponer otras partes de la clase que no pretendías cambiar. Si sientes que te resulta difícil centrarte en un aspecto específico del programa cada vez, recuerda el principio de responsabilidad única y comprueba si es el momento de dividir algunas clases en partes.

##pag:48

### Ejemplo

La clase Empleado tiene varias razones para cambiar. La primera razón puede estar relacionada con el trabajo principal de la clase: gestionar información de los empleados. Pero hay otra razón: el formato del informe de horas de trabajo puede cambiar con el tiempo, lo que te obliga a cambiar el código de la clase.


:::center
ANTES: la clase contiene varios comportamientos diferentes.
:::

Resuelve el problema moviendo el comportamiento relacionado con la impresión de informes de horas de trabajo a una clase separada. Este cambio te permite mover otros elementos relacionados con el informe a la nueva clase.

:::center
DESPUÉS: el comportamiento adicional está en su propia clase.
:::

##pag:49

## Principio de abierto/cerrado
# Open/Closed Principle

:::dotted-box
Las clases deben estar abiertas a la extensión pero cerradas a la modificación.
:::

a idea fundamental de este principio es evitar que el código existente se descomponga cuando implementas nuevas funciones.

Una clase está abierta si puedes extenderla, crear una subclase y hacer lo que quieras con ella (añadir nuevos métodos o campos, sobrescribir el comportamiento base, etc.). Algunos lenguajes de programación te permiten restringir en mayor medida la extensión de una clase con palabras clave como :::tag final ::: . Después de esto, la clase ya no está abierta. Al mismo tiempo, la clase está cerrada (también puedes decir completa) si está lista al 100 % para que otras clases la utilicen; su interfaz está claramente definida y no se cambiará en el futuro.

La primera vez que estudié este principio me confundieron las palabras :::tag abierta ::: y :::tag cerrada ::: , porque suenan mutuamente excluyentes. Pero en lo que respecta a este principio, una clase puede estar al mismo tiempo abierta (para la extensión) y cerrada (para la modificación).

Cuando una clase se ha desarrollado, probado, revisado e incluido en un framework o utilizada en una aplicación de cualquier otro modo, es arriesgado intentar juguetear con su código. En lugar de cambiar directamente el código de la clase, puedes crear una subclase

##pag:50

y sobrescribir las partes de la clase original que quieras que se comporten de otra forma. Lograrás tu objetivo sin descomponer clientes existentes de la clase original.

Este principio no está pensado para aplicarse a todos los cambios de una clase. Si sabes que hay un error en la clase, debes arreglarlo; no crees una subclase para ello. Una clase hija no debe ser responsable de los problemas de la clase padre.

### Ejemplo

Tienes una aplicación de comercio electrónico con una clase :::tag Pedido ::: que calcula los costos de envío, y todos los métodos de envío están incrustados dentro de la clase. Si necesitas añadir un nuevo método de envío, tienes que cambiar el código de la clase :::tag Pedido ::: , arriesgándote a descomponerlo.

:::center
ANTES: tienes que cambiar la clase Pedido siempre que añades un
nuevo método de envío a la aplicación.
:::

##pag:51

Puedes resolver el problema aplicando el patrón Strategy. Empieza extrayendo métodos de envío y colocándolos dentro de clases separadas con una interfaz común.

:::center
DESPUÉS: añadir un nuevo método de envío no requiere cambiar clases existentes.
:::

Ahora, cuando necesites implementar un nuevo método de envío, puedes derivar una nueva clase de la interfaz :::tag Envíos ::: sin tocar el código de la clase :::tag Pedido ::: . El código cliente de la clase :::tag Pedido ::: vinculará los pedidos con un objeto de envío de

##pag:52

la nueva clase cuando el usuario seleccione estos métodos de envío en la UI.

Esta solución tiene la ventaja adicional de que te permite mover el cálculo del tiempo de entrega a clases más relevantes, de acuerdo con el *principio de responsabilidad única*.

##pag:53

## Principio de sustitución de Liskov
# Liskov Substitution Principle

:::dotted-box
Al extender una clase, recuerda que debes tener la capacidad de pasar objetos de las subclases en lugar de objetos de la clase padre, sin descomponer el código cliente.
:::

Esto significa que la subclase debe permanecer compatible con el comportamiento de la superclase. Al sobrescribir un método, extiende el comportamiento base en lugar de sustituirlo con algo totalmente distinto.

El principio de sustitución es un grupo de comprobaciones que ayudan a predecir si una subclase permanece compatible con el código que pudo funcionar con objetos de la superclase. Este concepto es fundamental al desarrollar bibliotecas y frameworks, porque otras personas utilizarán tus clases y no podrás acceder directamente ni cambiar su código.

Al contrario que otros principios de diseño que están muy abiertos a la interpretación, el principio de sustitución incluye un grupo de requisitos formales para las subclases y, específicamente, para sus métodos. Repasemos esta lista en detalle.

##pag:54

* **Los tipos de parámetros en el método de una subclase deben coincidir o ser más abstractos que los tipos de parámetros del método de la superclase.** ¿Suena confuso? Veamos un ejemplo.

  * Digamos que hay una clase con un método que debe alimentar gatos: :::tag alimentar(Gato c) ::: . El código cliente siempre pasa objetos de gatos a este método.

  * **Bien:** Digamos que creaste una subclase que sobrescribió el método para que pueda alimentar a cualquier animal (una superclase de gatos): :::tag alimentar(Animal c) ::: . Ahora, si pasas un objeto a esta subclase en lugar de un objeto de la superclase al código cliente, todo funcionará bien. El método puede alimentar a todos los animales, por lo que alimentará a todos los gatos pasados por el cliente.

  * **Mal:** Creaste otras subclase y restringiste el método de alimentación para que acepte únicamente gatos de Bengala (una subclase de gatos): :::tag alimentar(GatoDeBengala c) ::: . ¿Qué le pasará al código cliente si lo vinculas con un objeto como éste, en lugar de hacerlo con la clase original? Debido a que el método sólo puede alimentar una raza específica de gatos, no servirá a los gatos genéricos pasados por el cliente, descomponiendo toda la funcionalidad relacionada.

* **El tipo de retorno en el método de una subclase debe coincidir o ser un subtipo del tipo de retorno del método de la superclase.** Como puedes ver, los requisitos para un tipo de retorno son inversos a los requisitos para los tipos de parámetros.

##pag:55

  * Digamos que tienes una clase con el método :::tag comprarGato(): Gato ::: . El código cliente espera recibir cualquier gato como resultado de ejecutar este método.

  * **Bien:** Una subclase sobrescribe el método de esta forma: :::tag comprarGato(): GatoDeBengala ::: . El cliente obtiene un gato de Bengala, que sigue siendo un gato, por lo que todo está bien.
  
  * **Mal:** Una subclase sobrescribe el método de esta forma: :::tag comprarGato(): Animal ::: . Ahora el código cliente se descompone porque recibe un animal genérico desconocido (¿Un lagarto? ¿Un oso?) que no encaja con la estructura diseñada para un gato.


Del mundo de los lenguajes de programación de tipado dinámico podemos extraer otro ejemplo negativo: el método base devuelve una cadena, pero el método sobrescrito devuelve un número.

* **Un método de una subclase no debe arrojar tipos de excepciones que no se espere que arroje el método base**. En otras palabras, los tipos de excepciones deben coincidir o ser subtipos de los que el método base es capaz de arrojar. Esta regla proviene del hecho de que los bloques :::tag try-catch ::: en el código cliente se dirigen a los tipos específicos de excepciones que más probablemente arrojará el método base. Por lo tanto, una excepción inesperada puede colarse entre las líneas defensivas del código cliente y destrozar la aplicación.

##pag:56

:::dotted-box
En la mayoría de lenguajes de programación modernos, sobre todo los de tipado estático (Java, C# y otros), estas reglas vienen integradas en el lenguaje. No podrás compilar un programa que viola estas reglas.
:::

* **Una subclase no debe fortalecer las condiciones previas.** Por ejemplo, el método base tiene un parámetro con el tipo :::tag int :::. Si una subclase sobrescribe este método y requiere que el valor de un argumento pasado al método sea positivo (lanzando una excepción si el valor es negativo), esto amplía las condiciones previas. El código cliente, que solía funcionar bien pasando números negativos al método, ahora se descompone si empieza a funcionar con un objeto de esta subclase.

* **Una subclase no debe debilitar las condiciones posteriores.** Digamos que tienes una clase con un método que trabaja con una base de datos. Se supone que un método de la clase siempre debe cerrar todas las conexiones de las bases de datos abiertas al devolver un valor. Creaste una subclase y la cambiaste, de modo que las conexiones de la base de datos permanezcan abiertas para poder reutilizarlas. Pero puede que el cliente no sepa nada de tus intenciones. Debido a que espera que los métodos cierren todas las conexiones, puede que simplemente finalice el programa después de invocar el método, contaminando un sistema con conexiones de bases de datos fantasma.

##pag:57

* **Los invariantes de una superclase deben preservarse.** Probablemente esta sea la regla menos formal de todas. Los invariantes son condiciones en las cuales un objeto tiene sentido. Por ejemplo, los invariantes de un gato son tener cuatro patas, una cola, la capacidad de maullar, etc. La parte confusa sobre los invariantes es que, aunque pueden definirse explícitamente en la forma de contratos de interfaz o un grupo de aserciones dentro de los métodos, también pueden resultar implícitos por ciertas pruebas de unidad y expectativas del código cliente. La regla de los invariantes es la más fácil de vulnerar, porque puedes no comprender o no ser consciente de todos los invariantes de una clase compleja. Por lo tanto, la forma más segura de extender una clase consiste en introducir nuevos campos y métodos y no meterse con miembros existentes de la superclase. Po supuesto, esto no siempre es posible en la vida real

* **Una subclase no debe cambiar los valores de campos privados de la superclase.** *¿Qué? ¿Cómo es posible?* Resulta que algunos lenguajes de programación te permiten acceder a miembros privados de una clase mediante mecanismos reflexivos. Otros lenguajes (Python, JavaScript) no tienen protección en absoluto para los miembros privados.

##pag:58

### Ejemplo

Veamos un ejemplo de una jerarquía de clases de documento que violan el principio de sustitución.

:::center
ANTES: el método guardar no tiene sentido en un documento de solo lectura, por lo que la subclase intenta resolverlo reiniciando el comportamiento base en el método sobrescrito.
:::

El método guardar de la subclase DocumentosDeSoloLectura arroja una excepción si alguien intenta invocarlo. El método base no tiene esta restricción. Esto significa que el código cliente se descompondrá si no comprobamos el tipo de documento antes de guardarlo.

El código resultante también viola el principio de abierto/cerrado, ya que el código cliente se vuelve dependiente de clases

##pag:59

concretas de los documentos. Si introduces una nueva subclase de documento, necesitarás cambiar el código cliente para que lo soporte.

:::center
DESPUÉS: el problema se resuelve tras hacer a la clase de documento de solo lectura la clase base de la jerarquía.
:::

Puedes resolver el problema rediseñando la jerarquía de clases: una subclase debe extender el comportamiento de una superclase, por lo tanto, el documento de solo lectura se convierte en la clase base de la jerarquía. El documento de escritura es ahora una subclase que extiende la clase base y añade el comportamiento de guardar.

##pag:60

## Principio de segregación de la intefaz
# Interface Segregation Principle

:::dotted-box
No se debe forzar a los clientes a depender de métodos que no utilizan.
:::

Intenta que tus interfaces sean lo suficientemente estrechas para que las clases del cliente no tengan que implementar comportamientos que no necesitan.


Según el principio de segregación de la interfaz, debes desintegrar las interfaces “gruesas” hasta crear otras más detalladas y específicas. Los clientes deben implementar únicamente aquellos métodos que necesitan de verdad. De lo contrario, un cambio en una interfaz “gruesa” descompondrá incluso clientes que no utilizan los métodos cambiados.

La herencia de clases permite a una clase tener una única superclase, pero no limita el número de interfaces que la clase puede implementar al mismo tiempo. Por lo tanto, no hay necesidad de amontonar toneladas de métodos no relacionados en una única interfaz. Divídela en varias interfaces más refinadas; puedes implementarlas todas en una única clase si es necesario. Sin embargo, a algunas clases no les importa que sólo implementes una de ellas.

##pag:61

### Ejemplo

Imagina que creaste una biblioteca que facilita la integración de aplicaciones con varios proveedores de computación en la nube. Aunque en la versión inicial sólo soportaba Amazon Cloud, cubría todos los servicios y funciones de la nube.

En aquel momento asumiste que todos los proveedores en la nube tienen la misma amplitud de espectro de funciones que Amazon. Pero cuando hubo que implementar soporte para otro proveedor, resultó que la mayoría de las interfaces de la biblioteca eran demasiado amplias. Algunos métodos describen funciones que otros proveedores de la nube no incluyen.

:::center
ANTES: no todos los clientes pueden satisfacer los requisitos de la
abotargada interfaz.
:::

##pag:62

Aunque puedes implementar estos métodos y colocar algunas maquetas, no será una solución muy limpia. La mejor solución es dividir la interfaz en partes. Las clases capaces de implementar la interfaz original pueden ahora implementar varias interfaces refinadas. Otras clases pueden implementar únicamente aquellas interfaces que tienen métodos que tienen sentido para ellas

:::center
DESPUÉS: una interfaz abotargada se divide en un grupo de interfaces más detalladas.
:::

Como sucede con otros principios, con éste también puedes ir demasiado lejos. No dividas una interfaz que ya es bastante específica. Recuerda que, cuantas más interfaces crees, más se complicará tu código. Mantén el equilibrio.

##pag:63

## Principio de inversión de la dependencia
# Dependency Inversion Principle

:::dotted-box
Las clases de alto nivel no deben depender de clases de
bajo nivel. Ambas deben depender de abstracciones. Las
abstracciones no deben depender de detalles. Los detalles deben depender de abstraccione
:::

Al diseñar software, normalmente puedes distinguir entre dos
niveles de clases.

* Las **clases de bajo nivel** implementan operaciones básicas, como trabajar con un disco, transferir datos por una red, conectar con una base de datos, etc.

* Las **clases de alto nivel** contienen la lógica de negocio compleja que ordena a las clases de bajo nivel que hagan algo.

Algunas personas diseñan primero las clases de bajo nivel y sólo entonces comienzan a trabajar con las de alto nivel. Esto es muy habitual cuando empiezas a desarrollar un prototipo de un nuevo sistema y no estás seguro de lo que es posible a alto nivel, porque el contenido de bajo nivel aún no está implementado o claro. Con este sistema, las clases de la lógica de negocio tienden a hacerse dependientes de clases primarias de bajo nivel.

##pag:64

El principio de inversión de la dependencia sugiere cambiar la
dirección de esta dependencia.

1. Para empezar, debes describir interfaces para operaciones de
bajo nivel en las que se basarán las clases de alto nivel, preferiblemente en términos de negocio. Por ejemplo, la lógica de negocio debe invocar un método :::tag abrirInforme(archivo) ::: en lugar de una serie de métodos abrirArchivo(x), :::tag leerBytes(n) ::: , :::tag cerrarArchivo(x) ::: . Estas interfaces cuentan como de alto nivel.

2. Ahora puedes hacer las clases de alto nivel dependientes de esas interfaces, en lugar de clases concretas de bajo nivel. Esta dependencia será mucho más débil que la original.

3. Una vez que las clases de bajo nivel implementan esas interfaces, se vuelven dependientes del nivel de la lógica de negocio, invirtiendo la dirección de la dependencia original.

El principio de inversión de la dependencia suele ir de la mano del principio de abierto/cerrado: puedes extender clases de bajo nivel para utilizarlas con distintas clases de lógica de negocio sin descomponer clases existentes.

### Ejemplo

En este ejemplo, la clase de alto nivel — que se ocupa de informes presupuestarios — utiliza una clase de base de datos de bajo nivel para leer y almacenar su información. Esto significa que cualquier cambio en la clase de bajo nivel, como en el caso del lanzamiento de una nueva versión del servidor

##pag:65

de la base de datos, puede afectar a la clase de alto nivel,
que no tiene por qué conocer los detalles de almacenamiento
de datos.

:::center
ANTES: una clase de alto nivel depende de una clase de bajo nivel.
:::

Puedes arreglar este problema creando una interfaz de alto nivel que describa operaciones de leer/escribir y haciendo que la clase de informes utilice esa interfaz en lugar de la clase de bajo nivel. Después puedes cambiar o extender la clase de bajo nivel original para implementar la nueva interfaz de leer/escribir declarada por la lógica de negocio.

##pag:66

:::center
DESPUÉS: las clases de bajo nivel dependen de una abstracción de
alto nivel.
:::

Como resultado, la dirección de la dependencia original se ha invertido: las clases de bajo nivel dependen ahora de abstracciones de alto nivel.

##pag:67

# EL CATÁLOGO DE PATRONES DE DISEÑO