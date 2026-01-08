# Informe de Testing - Jessica Brotons Maciá

## Actividad 1
* **Reto:** Se está testeando si el componente List muestra correctamente el mismo nombre que se le ha pasado por parámetro y si la película tiene una nota de 10, el título se motrará en texto de color rojo, si no, se mostrará en negro.

* **Prompt IA:** Como hago un test con vitest para poder comprobar que el nombre que se le pasa por parámetro por props, además de que si la película pasada tiene un 10 de nota, que el titulo aparezca en rojo.

* **Explicación del Test:** En el *Arrange* estamos renderizando el componente usando render, además de que el nombre que estamos pasando por parámetro, está almacenado en una constante llamado nombre que posteriormente vamos a usar. 
En *Act* no estamos realizando nada porque no tenemos que simular ninguna acción del usuario.
En *Assert*, mediante expect, comprobamos si lo que se ha pasado por parámetro cuadra con lo que debe de ser.
1. Para comprobar que sea el mismo texto que se le pasa por parámetro, lo comprobamos con expect(screen.getByText(nombre)).toBeInTheDocument()

2. Para comprobar que el título se muestre en rojo, creamos una variable título donde almacenamos la etiqueta del título con todo su contenido. Posteriormente, con expect(titulo).toHaveClass('text-red-600') comprobamos que la etiqueta del título use el color rojo para el texto.

![Actividad 1](./test/Actividad1.png)



## Actividad 2
* **Reto:** Se está testeando si el componente List comprueba que muestra correctamente el contenido que se le pasa a través de children, además de comprobar que la imagen tenga el atributo alt correcto que le corresponde.

* **Prompt IA:** Hazme el test en vitest del componente List para comprobar que renderiza correctamente el contenido que se le pasa a través de children y comprueba que la imagen tiene el atributo alt correcto basado en el nombre del intérprete o de la película.

* **Explicación del Test:** En el *Arrange* estamos renderizando el componente usando render. 

En *Act* no estamos realizando nada porque no tenemos que simular ninguna acción del usuario.

En *Assert*, mediante expect, comprobamos si lo que se ha pasado por parámetro cuadra con lo que debe de ser.
1. Para comprobar que el contenido pasado por children es el correcto, usamos .toBeInTheDocument().
2. En el otro caso, para comprobar que el alt este en la imagen, hacemos uan variable iamgen donde obtenemos la imagen
y posteriormente, con .toHaveAttribute('alt') comprobamos que dicha etiqueta de la imagen contenga el atributo.

![Actividad 2](./test/Actividad2.png)