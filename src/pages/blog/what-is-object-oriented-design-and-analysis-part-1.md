---
templateKey: article-page
title: What is Object Oriented Design and Analysis? - Part 1
slug: what-is-object-oriented-design-and-analysis-part-1
author: Mohamed Kassem
authorLink: https://www.kassm.me
date: 2020-12-16T10:11:05.490Z
cover: /img/19362653.jpg
metaTitle: Object Oriented Design and Analysis | Mohamed Kassem Blog
metaDescription: Object-oriented design is the process of planning a system of
  interacting objects for the purpose of solving a software problem. It is one
  approach to software design
tags:
  - software-design
  - software-engineering
  - clean-code
  - object-oriented-modeling
---

In this article, we will discuss the important concept of object-oriented design and analysis, but first, we will take a look at why we need to do architecture for my software, and the most common ways to analyze and model your software.

## Table of Contents

- What is OOP?
- Software Architect and Design Roles in Industry
- Object-Oriented Modeling
  - **why should you use objects to represent things in your code?**
- Design in the Software Process
  - Example
  - **Satisfying Qualities**
  - Class Responsibility Collaborator (CRC)
- Object-Oriented Modeling
  - Evolution of Programming Languages
  - Four Design Principles
    - Abstraction
    - Encapsulation
    - Decomposition
    - Generalization

### What is OOP?

Object-oriented programming (OOP) is a style of programming that focuses on using objects to design and build applications. Contrary to procedure-oriented programming where programs are designed as blocks of statements to manipulate data, OOP organizes the program to combine data and functionality and wrap it inside something called an “Object”.

# Software Architect and Design Roles in Industry

the software designer or a software architect role can look very different from company to company in Characteristics like company size, the scope of the project, the experience of the development team, the organizational structure and the age of the company

<b>Software Designer</b> responsible for outlining a software solution to a specific problem by design the details of individual components and their responsibilities.
<b>in short:</b> software looks at the lower-lever aspects of the system, focuses on the smaller spaces within.

**Software Architect** responsible for looking at the entire system and choosing appropriate frameworks, data storage, solutions, and determining how components interact with each other

**in short:** software looks at the higher-lever/bigger picture aspects of the system, focuses on the major structures and services.
**Great software designers and architects are detail-oriented, forward thinkers**

# Object-Oriented Modeling

when solving a problem, object-oriented modeling involves the practice of representing key concepts through **objects** in your software. Depending on the **problem**, **many concepts,** even **instances of people, places,** or things become **distinct objects** in the software

### **why should you use objects to represent things in your code?**

- to keep your code **organized, flexible and reusable**
- keeps code organized by having **related details and specific functions** in distinct, easy to find places to creates **flexibility**
- flexibility enables you **easily change details** in a modular way **without affecting the rest of the code,** and **reuse code to keep your program simple.**

**With object-oriented thinking,** you often think of everything as objects event living things and all these objects are self-aware event inanimate things.

# Design in the Software Process

you can think of developing software as a **process that takes a problem and produces a solution** involving software.

it's an iterative process, taking a set of requirements ⇒ working and tested implementation ⇒ building a complete solution

![agile-process.png](https://raw.githubusercontent.com/mkassm/Design-Patterns/main/OOD/images/agile-process.png "Agile process to build software")

Why projects fail? it's related to issues in requirements and design

so it's important to take your time in gathering/understanding the requirements and create a design

![misunderstanding-requirments.png](https://raw.githubusercontent.com/mkassm/Design-Patterns/main/OOD/images/misunderstanding-requirments.png "Bad and misunderstanding requirements")

We get **requirements** by asking **questions** about issues that the clients may not **consider** besides **identifying specific needs.**

So to know the trade-offs the client needs to make in the solution with a **clear idea** of what you are trying to **accomplish,** you can use **Conceptual Design mock-ups** and **Technical Design diagrams.**
For the design phase, you will have to think like an **architect**, which means thinking about the structure and behavior of your software.

starting with **eliciting requirements** which involve not only listening to what the client is telling you but asking questions to clarify what the client has not told you, once these revealing follow-up questions you now have an initial set of requirements allowing you to start thinking of possible designs.

these requirements involve producing a Conceptual Design and Technical Design which representing two kinds of artifacts ⇒ **Conceptual mockups** and **Technical diagrams**

**Conceptual mockups** provide your initial thoughts for how the requirements will be satisfied, focusing on **components** and **connections**, each component has a **responsibility** of it does or what its purpose and avoid technical details to clarify design decisions with clients and users.

**in software, conceptual mockups can be hand-drawn sketches or draw made using computer tools.**

**Technical diagrams** are responsible for describing how these responsibilities are met, by start specifying the technical details of each component, this done by splitting components into smaller and smaller components to help coordinate development work.

**Components** turn into collections of function, classes, or other components, these pieces then represent a much simpler problem that developers can implement.

### Example

for university course search website task

**Requirement** ⇒ As a learner, I want to search for relevant courses through a search page

**Conceptual mockups** ⇒ components like search page and course, search page has the responsibility of searching for relevant courses.

![example1-CM.png](https://raw.githubusercontent.com/mkassm/Design-Patterns/main/OOD/images/example1-CM.png "example 1")

**Technical design ⇒** takes each component by technical details by answering the following question....how does the search page fulfill its responsibility of searching?

- does the page need to talk to an external system ? or the university already has a course database component to connect the Search Page Component with Course Database Component
  ![example1-TD.png](https://raw.githubusercontent.com/mkassm/Design-Patterns/main/OOD/images/example1-TD.png "example 1")

**if the design satisfying requirements?** some software design decisions will involve tradeoffs in different quality attributes such as **performance**, **convenience**, and **security.** so it's important to consider how quality attributes can compete in a proposed solution under different situations. Then, taking this into account and weighing it against the requirements of the product, a suitable compromise can be determined.

### **Satisfying Qualities**

Qualities are achieved through satisfying functional and non-functional requirements, which in turn are the basis for the design process.

For software, there are **Functional Requirements** that describe what the system or application is expected to do. For example, if you are designing a media app, the app must be able to download and play a full-length movie. So the key quality is simply **correctness** to build software design solutions to meet such requirements correctly.

**Non-Functional Requirements** specify how well the system or application **does what it does**. Such requirements may describe how well the software runs in particular situations. Non-functional requirements to satisfy might include **performance, resource usage, and efficiency**; these requirements can be measured from the running software. For example, the media app can have non-functional requirements to download a full-length movie at a specific speed and to play such a movie within a memory limit. other qualities non-function satisfies are **reusability, flexibility, and maintainability.**

After the design gets detailed and implementation is constructed, required qualities should be verified through techniques like **reviews** and **tests,** also **feedback from end-users.**

You must satisfy qualities that matter to users as well as for its developers, so when your software structure suits the balance of qualities desired, how the structure is organized may affect the **performance** as seen by the **users,** as well as the **reusability and maintainability** as seen by the **developers.**

Below are some common trade-offs in qualities for software design:

- Performance and maintainability – High-performance code may be **less clear** and **less modular**, making it **harder to maintain.** Alternately, extra code for backward compatibility
- Performance and security – Extra overhead for high security may **reduce performance**

so you have to strike a **balance** during design. You should ask how much performance, maintainability, security, or backward compatibility is needed.

### Class Responsibility Collaborator (CRC)

when identifying **components, connections, and responsibilities** from some requirements when forming the conceptual design. CRC cards help you to **organize your components into classes**, identifying the **responsibilities**, and determine how they will **collaborate with each other.** Its **records and organize and refine** the components into your software.

- CRC Structure
  ![crc_card.png](https://raw.githubusercontent.com/mkassm/Design-Patterns/main/OOD/images/crc_card.png "crc card")

  **Collaborators** are other classes that the class **interacts** with to fulfill its responsibilities. So in the collaborator's section, you list other components that your current component connects with.

**Example on ATM bank machine.**

![crc_customer.png](https://raw.githubusercontent.com/mkassm/Design-Patterns/main/OOD/images/crc_customer.png "crc customer")

![crc_bank.png](https://raw.githubusercontent.com/mkassm/Design-Patterns/main/OOD/images/crc_bank.png "crc bank")

**CRC** helps you to organize your ideas and extract the needed objects and it's relationships. and can be used for prototyping and simulation.

**For example**, you may be wondering in the above example, **How bank machines authenticate bank customers?**

So this adds another component is **Bank** to authenticate from it. another question **how this back and bank machine communicate?** it adds another component is **Network,** also we need to **secure this network** so we will add another component is **Encryption** and so far.

Also, you man notice that the bank machine consists of other objects like **Card Reader, Keypad, Display, Cheque Slot, Cash Dispenser.** can be written on their own cards

# Object-Oriented Modeling

One approach to help make the design process easier is the object-oriented approach. This allows for the description of concepts in the problem and solution spaces as **objects**. objects are a notion that can be understood by both users and developers because **object-oriented thinking** applies to many fields. This shared knowledge makes it possible for users and developers to discuss elements of complex problems.

Even here, you don't go straight from the problem to writing the code, you have to do **Conceptual Design involving Object-Oriented Analysis** to identify the key objects in the problem. also, **Technical Design involving Object-Oriented Design** to further refine the details of the objects including their attributes and behaviors.

The goal during Software Design is to construct and refine **models** of all the objects, these models are useful throughout the design process.

- **Entity** where initial focus during the design is placed in the problem space.
- **Control** objects that receive events and actions.
- **Boundary** that connects services outside your system.

The Models are expressed in a visual notation, called **Unified Modelling Language (UML).**

## Evolution of Programming Languages

Programming languages evolved in a similar fashion as **traditional languages**, each new programming language was developed to provide **solutions** to problems that previous languages were unable to adequately address. The ideas used in computer languages have caused a shift in **programming paradigms.**

In the 1980s, Object-Oriented Design that is central to object-oriented programming became popular.

**The goal of object-oriented design is to:**

- Make an abstract data type easier write.
- Structure a system around abstract data types called **classes**
- Introduce the ability for an abstract data type to extend another by introducing a concept called **inheritance**

The advantage of using programming paradigms like OOP is that the system will mimic the structure of the problem meaning that any object-oriented program is capable of representing **real-world objects** or ideas with more fidelity that allows developers to compartmentalize the data and how it can be manipulated in their own separate classes.

So **Object-Oriented Programming** is the **predominate programming paradigm.**

Most modern programming languages like Java, C++, C# are founded based on objects.

**Why this history ?**

as a developer you need to have a broad **understanding of what is out there in the industry today,** There are many systems that still use the older languages and design paradigms.

Also Object-oriented programming is a powerful tool but is not only in your toolbox. Object-oriented design is not always the best approach for everything because the design may not fit the problem, Remember to be efficient with your time event if this means taking a non-object-oriented approach.

Here is some **history of programming languages** and paradigms and the issues they met.

![COBOL-Fortran.png](https://raw.githubusercontent.com/mkassm/Design-Patterns/main/OOD/images/COBOL-Fortran.png "cobol and fortran languages")

![C.png](https://raw.githubusercontent.com/mkassm/Design-Patterns/main/OOD/images/C.png "c programming")

![Pascal.png](https://raw.githubusercontent.com/mkassm/Design-Patterns/main/OOD/images/Pascal.png "pascal language")

![c%2B%2B_java_c%23.png](https://raw.githubusercontent.com/mkassm/Design-Patterns/main/OOD/images/c%2B%2B_java_c%23.png "c# and java")

## Four Design Principles

Object-oriented programming allows you to create models of how objects are represented in your system. However, to create an object-oriented program, you must examine the major design principles of such programs. Four of these major principles are: **abstraction, encapsulation, decomposition, and generalization.**

### Abstraction

Abstraction is one of the main ways that humans deal with complexity. It is the idea of simplifying a concept in the problem domain to its essentials within some **context**. Abstraction allows you to better understand a concept by breaking it down into a simplified description that **ignores unimportant details.** Also an abstraction for a concept should **make sense** for the concept's purpose. This idea applies **the Rule Of Least Astonishment**

**Rule Of Least Astonishment:** is the abstraction captures the essential attributes and behavior for a concept with **no surprises and no definitions** that fall beyond its scope. You don't want to surprise anyone trying to understand your abstraction with **irrelevant characteristics**.

It's up to you to choose the abstraction that is most appropriate for your purpose depending on the context of your app.

**For example**, the context is an academic setting, so abstraction for a student will be the essential characteristics/attributes of him:

- The courses they are currently taking
- Their grades in each course
- The Student ID number

Another example for defining attributes of a cat from the context of a cat owner

- A cat will have basic attributes like name, color, favorite Nap location, microchip number

Also, abstraction should describe a base **behavior**, Like for **student** would be Studying, doing assignments, attending lectures which are responsibilities that student abstraction does for it's purpose.

**Example** of abstraction of lion

- attributes like age, beard, size and it's color
- behaviors like hunting, eating and sleeping

In abstraction anything other than a concept's essential **attributes and behaviors** is irrelevant focusing the context and purpose of this object into our app to simplifying your class design so the are more focused and understandable to someone else viewing them.

**Abstraction UML Class diagram and C# Code**

Thinking of how we abstract **Food** object in CRC and Class diagram

![association-ex.png](https://raw.githubusercontent.com/mkassm/Design-Patterns/main/OOD/images/association-ex.png "association example")

Class diagram contains

- Class Name is **Food**
- Properties which define C# Members ⇒ \[variable name]:\[variable type]
- Operations which define C# Methods ⇒ name( \[parameter list] ): \[return type]

Class diagram is very close to implementation which making the translation to code very easy

So the following code is implemented in above class diagram

```csharp
public class Food
{
	public string GroceryId{ get; set; }
	public string Name{ get; set; }
	public string Manufacturer{ get; set; }
	public Date ExpiryDate{ get; set; }
	public double Price{ get; set; }

	public bool IsOnSale(){

	}
}
```

### Encapsulation

Encapsulation is a fundamental design principle in object-oriented modeling and programming, Encapsulation forms a self-contained object by **bundling** the **data and functions** it requires to work, **expose an interface** whereby other objects can access and use it, **restricts access** to certain inside details. It keeps software modular, easier to work with, and easy to manage.

So after **Abstraction** that determine the attributes and behaviors that are relevant to concept in some context ⇒ **Encapsulation** ensures that these characteristics are bundled together in the same class

- **For example** Student object should "**knows**" relevant data like degree program, the Course object would "**know**" a list of students taking it, Professor object would "**know**" a list of courses teaches.

Also, the methods manipulate the attribute values in the object to achieve the actual behaviors, by **Exposing** some methods to be accessible to objects, and **restricts** other.

- **For example** Course can provide a method to allow a student to enroll in the course or a Course that allow professor to see the students in that course.

**Encapsulation helps with data integrity** so you can define methods and attributes of class to be **restricted** from outside to access except through specific methods.

**Encapsulation can secure sensitive information,** for example, allowing a Student class to store a degree program and GPA without reveals it's actual value so it has a method that tells whether the student is in good standing for the degree program or not.

**Encapsulation helps with software changes** so the accessible interface of the class will remain the same, while implementation of attributes and methods can change.

- **For example** Professor need to know student GPA, student have many ways to calculate his GPA like entering Student Information system or go to administrator to get. So Professor don't care how the student will get from.

In programming, this thinking called **Black Box** Thinking, you think of a class like a black box that you cannot see details inside of how attributes are represented or how methods compute the result, you just provide inputs and obtain outputs by calling methods so it doesn't matter what happens in the box to achieve the expected behaviors.

**Encapsulation** achieves **Abstraction Barrier** since the internal workings are not relevant to the outside world to **reduces complexity** for the users of a class and **increases reusability** because another class only needs to know the right method to call to get desired behavior.

**Encapsulation UML Class diagram and C# Code Example**

There are two different kinds of methods typically used to preserve data integrity. These are:

- **Getter Methods** are methods that retrieve data, and their names typically begin with getting and end with the name of the attribute whose value you will be returning.
- **Setter Methods** change data, and their name typically begin with set and end with the name of the variable you wish to set. Also Setters are used to **set private attribute** in a safe way.

![encap-ex.png](https://raw.githubusercontent.com/mkassm/Design-Patterns/main/OOD/images/encap-ex.png "encapsulation")

```csharp
public class Student
{
	private float gpa;
	private string degreeProgram;

	public float getGPA(){
		return gpa;
	}
	public void setGPA(float newGPA){
		gpa = newGPA;
	}
	public string getDegreeProgram(){
		return DegreeProgram;
	}
	public void setDegreeProgram(string newDegreeProgram){
		if (gpa > 2.7){
			degreeProgram = newDegreeProgram;
		}
	}
}
```

### Decomposition

Decomposition is taking a **whole** thing and dividing it up into different **parts**, Or on the flip side, taking a bunch of separate parts with different functionalities and **combining** them together to form a whole, Decomposition allows you to further beak down problems into pieces that are easier to understand and solve.

**The general rule** for decomposition it to look at the different responsibilities of the some **whole** thing, and evaluate how you can **separate** them into different parts each with its own responsibility.

- **For example** when identifying the different parts of a **car** like transmission, motor, wheels, tires, doors, windows, seats, and fuel. each of these parts had a specific purpose to achieve the responsibilities of the whole.

**The Nature of Parts**

A whole might have a **fixed** or **dynamic** number of a certain type of part.

- If there is a **fixed number** then over the lifetime of the whole object it will have exactly that much of the part object, **for example** a refrigerator have fixed number of freezers and not change over time.
- Sometimes parts with a **dynamic number** meaning the whole object may gain new instances of those part objects over its lifetime, **for example,** a refrigerator can have a dynamic number of food items over time, or passengers in a car.

Note that a **part** can also serve as a **whole**, which is made up of further **parts**. For example, a kitchen is a part of a house. But the kitchen may be made up of further parts, such as an oven and a refrigerator.

**Composition** involving the lifetimes of the whole object and the part objects that are be related.

- **For example,** the engine typically has the same lifetime as the car - when the engine goes, so does the car! The wheels, on the other hand, are replaced many times over the course of a car's life.
- Whole things may also contain parts that are **shared** with another whole at the same time. However, sometimes sharing a part is not possible or intended.

**Composition UML Class diagram and C# Code example**

There are three types of **relationships** found in decomposition that define the interaction between the whole and the parts:

- Association
- Aggregation
- Composition

**Association** is "some" relationship. This means that there is a loose relationship/no dependent between two objects. These objects may interact with each other for some time. for example, an object of a class may use services/methods provided by object of anther class like food and wine, student and sports, kitten and yarn. each of these relationships is between completely separate entities, if one object is **destroyed**, the other can **continue to exist.**

The following fig shows a class diagram with two objects that have association relationship

![association-ex.png](https://raw.githubusercontent.com/mkassm/Design-Patterns/main/OOD/images/association-ex.png "association")

<b>0..\*</b> ⇒ means a Person object is associated with **zero or more** airline objects and the same with Airline object is associated with **zero or more** person objects.

```csharp
public class Student
{
    public void Play(Sport sport)
    {
			// statements
    }
}

public class Sport
{
	public string Name { get; set; }
}
```

**Aggregation**: is a "Has-a" relationship where a **whole has parts** **that belong to it**, There may be sharing of parts amount the wholes this relationship.

The "has-a" relationship from a whole to the parts is considered **weak "has-a"**. this means is although parts can belong to the wholes, they **can also exist independently** meaning they can **both exist without the other.**

for example relationship between airliner and its crew, so without the crew an airliner would not be able to fly, However, the airliner does not cease if there is no crew on board, same for the crew they are part of airliner but the crew become destroyed if they are not on board their airliner. the entities have a relationship but can exist outside of it. like relationship between course section and student, pet stores and pets, bookshelf and books.

![aggreg-ex.png](https://raw.githubusercontent.com/mkassm/Design-Patterns/main/OOD/images/aggreg-ex.png "aggregation example")

```csharp
public class Aireliner
{
    private List<CrewMember> Crew;

    public Aireliner()
    {
        Crew = new List<CrewMember>();
    }

    public void AddMember(CrewMember crewMember)
    {
        Crew.Add(crewMember);
        // Statements
    }
}

public class CrewMember
{
    public int Id { get; set; }
    public string Name { get; set; }
    // Statements
}
```

**Composition:** is an exclusive containment of parts, otherwise known as a **strong "has-a"** relationship, this means is that the **whole cannot exist without its parts**, if it loses any of its parts the whole ceases to exist if the whole destroyed then all of its parts are destroyed too. Usually, you can only access the parts through their whole, Contained parts are exclusive to the whole, like the relationship between a house and a room, the human and brain.

**Composition is the most dependent of the decomposition relationships,** it forms a relationship that only exists as long as each object exists.

The following diagram shows a class diagram of the composition relationship, describes the House object **has one or more** room objects.

![composition-ex.png](https://raw.githubusercontent.com/mkassm/Design-Patterns/main/OOD/images/composition-ex.png "composition example")

```csharp
public class Human
{
    public Brain Brain { get; set; }
    public Human()
    {
        Brain = new Brain();
    }
}

public class Brain
{
    // statements
}
```

### Generalization

Generalization helps reduce redundancy when solving problems.

When model behaviors using **methods** to eliminates the need to have identical code written throughout a program. like generalize repetitious code that we would need to write by making a separate method and calling it for examples

![generlize-exp-1.png](https://raw.githubusercontent.com/mkassm/Design-Patterns/main/OOD/images/generlize-exp-1.png "generlization example 1")

![generlize-exp-2.png](https://raw.githubusercontent.com/mkassm/Design-Patterns/main/OOD/images/generlize-exp-2.png "generlization example 2")

**Generalization** is used when design algorithms, which are meant to be used to perform the same action on different sets of data, we generalize the actions into its own methods and simply pass the data through arguments.

**Generalization** also applied on class through **Inheritance,** so we take **repeated, common and shared characteristics** between two or more classes.

**Inheritance and Methods** exemplify the generalization design principle, that following technique called **Don't Repeat Yourself (D.R.Y)** which mean write programs that are capable of performing the same tasks but with less code to be more reusable and easy to maintain.

**Generalization UML Class diagram and C# Code example**

The following figures show how diagram inheritance in UML diagram and example

![generalization-ex1.png](https://raw.githubusercontent.com/mkassm/Design-Patterns/main/OOD/images/generalization-ex1.png "generlization example 1")

![generalization-ex2.png](https://raw.githubusercontent.com/mkassm/Design-Patterns/main/OOD/images/generalization-ex2.png "generlization example 2")

```csharp
public abstract class Animal
{
    protected int numberOfLegs;
    protected int numberOfTails;
    protected string name;

    public Animal(string petName, int legs, int tails)
    {
        this.name = petName;
        this.numberOfLegs = legs;
        this.numberOfTails = tails;
    }

    public virtual void walk() { /* statements */ } // to be overrided
    public void run() { /* statements */ }
    public void eat() { /* statements */ }
}

public class Dog: Animal
{
    public Dog(string name, int legs, int tails): base(name, legs, tails)
    { }

    public void playFetch() { /* statements */ }

		// you also can override a method in super class
		public override void walk() { /* statements */ }
}
```

**Multi-Inheritance**

Super class can have many sub classes, subclass can have only inherit from one superclass.

![multi-inher-ex.png](https://raw.githubusercontent.com/mkassm/Design-Patterns/main/OOD/images/multi-inher-ex.png "multi inheritance")

```csharp
public class Dog: Animal
{
    public Dog(string name, int legs, int tails): base(name, legs, tails)
    { }

    public void playFetch() { /* statements */ }
}

public class Cat: Animal
{
    public Cat(string name, int legs, int tails): base(name, legs, tails)
    { }

    public void playWithYarn() { /* statements */ }
}
```

**Generalization with Interfaces in C# and UML**

Interface is like a contract to be fulfilled by implementing classes, used to only describe behaviors.

- Interface like abstract classes which cannot be instantiated, which mean you can implement **polymorphism** meaning \*\*\*\*when two classes have the same description of behavior but implementation may be different
- Interface can inherit from other interfaces
- Interface inheritance should be abused, this means you should not be extending interfaces if you trying to create a larger interface
- C# and java does not support multi-inheritance classes because this cause **Data Ambiguity** meaning when a subclass inherits from two or more with have the attributes with the same name or methods signature, how do we distinguish between them?
- So Class can implement as many interfaces as we want

![interface-ex1.png](https://raw.githubusercontent.com/mkassm/Design-Patterns/main/OOD/images/interface-ex1.png "interface-ex1")

![interface-ex2.png](https://raw.githubusercontent.com/mkassm/Design-Patterns/main/OOD/images/interface-ex2.png "interface-ex2.png")

```csharp
interface IAnimal
{
    public void move();
    public void speak();
    public void eat();
}

class Dog :IAnimal
{
    public void eat() { /* statements */}

    public void move() { /* statements */}

    public void speak() { Console.WriteLine("Bark!"); }
}

class Cat : IAnimal
{
    public void eat(){ /* statements */}

    public void move(){ /* statements */}

    public void speak() { Console.WriteLine("Meow!"); }
}
```

- Classes can implement one or more interfaces at the time, which allows them to have multiple types.
- Interfaces enable you to describe behaviors without the need to implement them, which allows you to reuse these abstractions.

![class-vs-interface.png](https://raw.githubusercontent.com/mkassm/Design-Patterns/main/OOD/images/class-vs-interface.png "class-vs-interface")

<hr>

[Edit this page in Github](https://github.com/mkassm/Design-Patterns/blob/main/OOD/README.md)
