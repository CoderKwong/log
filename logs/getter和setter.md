# getter 和 setter

`get`和`set` 可以在 `class` 声明的*类*，或者`Object`(*对象*)中使用，先看一下在`Object`中的用法：

```
let people = {
	fullName: 'Tim Chan',

	sayName(){
		return `My name is ${this.fullName}`
	},

	get firstName(){
		return this.fullName.split(/\s/)[0]
	},

	get lastName(){
		return this.fullName.split(/\s/)[1]
	},

	set lastName(str){
		this.fullName = `${this.firstName} ${str}`
	}
}
console.log(people.sayName()) //My name is Tim Chan
people.lastName = 'Chou'
console.log(people.sayName()) // My name is Tim Chou
```

`getter` 可以理解为*伪属性*，通过一些简单的计算返回一个属性值，免去读取数据时定义一些冗余的函数方法，上面的例子除了通过调用`sayName()`方法外，也可以直接引用属性来获取数据，例如：

```
console.log(people.lastName);
```

通过`sayName()`和`lastName`对比，`sayName`函数返回的效果，与`lastName`属性返回的效果是一样。

`setter` 接受参数来修改属性值，而内部是可以通过一些计算来返回伪属性的值。

刚才用到了`ES2015`中对象方法的简单写法，参考：[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Method_definitions](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Method_definitions)

声明`类`的用法：

```
class People {
	constructor(fullName) {
		this.fullName = fullName
	}

	sayName() {
		console.log(`My name is ${this.firstName} ${this.lastName}`)
	}

	get firstName() {
		return this.fullName.split(/\s/)[0]
	}

	get lastName(){
		return this.fullName.split(/\s/)[1]
	}

	set lastName(str){
		this.fullName = `${this.firstName} ${str}`
	}
}

let colinfan = new People('Coiln Fan');
colinfan.sayName()
colinfan.lastName = 'Chan';
colinfan.sayName()

console.log(colinfan.lastName);
```

用法一样，只是在语法格式上稍有区别，`class`定义的*类*的`getter`、`setter`都是指向实例的；

`getter`和`setter`使用，相比函数，在语法上看会简洁优雅，特别是`setter`，避免函数传参，直接用`=`赋值，语义更加清晰。

