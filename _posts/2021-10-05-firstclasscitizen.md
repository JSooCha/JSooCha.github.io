---
layout: post
title: first-class citizen
---
## **1급 객체**
### 함수를 변수에 저장 가능  
```swift
func Add (_ x: Int, second y: Int) -> Int {  
    return (x + y)  
}  
let sum = Add  
print(type(of:sum)) //(Int, Int) -> Int  
print(Add(4, second:20)) //24  
print(sum(4, 20)) //24  
```

### 1급 객체 : 함수를 매개변수로 사용 가능  
```swift
func Add (_ x: Int, second y:Int) -> Int {  
    return (x + y)  
}  
let sum = Add  
print(type(of:sum)) //(Int, Int) -> Int  
print(sum(4, 20)) //24  
func Avg (AddFunc: (Int, Int) -> Int, value1: Int, value2: Int) {  
    let average = AddFunc(value1,value2) / 2  
    print("평균 : \(average)")  
}
Avg(AddFunc: sum, value1: 4, value2: 20) //평균 : 12  
```

### 1급 객체 : 함수를 리턴값으로 사용 가능  
```swift
func Add (_ x: Int, second y:Int) -> Int {  
    return (x + y)  
}  
let sum = Add  
print(type(of:sum)) //(Int, Int) -> Int  
print(sum(4, 20)) //24  
func SumFunc() -> (Int, Int) -> Int {  
    return sum  
}  
print(SumFunc()(12,8)) //20 
``` 