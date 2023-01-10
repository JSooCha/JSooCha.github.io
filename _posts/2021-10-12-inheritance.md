---
title: inheritance
author_profile: true
sidebar_main: true
---
## 상속
```swift
class Info { //부모 클래스
    var age : Int
    var name : String
    var height : Double 
    var weight : Double 
    func display() {
        print("나이 : \(age), 이름 : \(name), 키 : \(height), 몸무게 : \(weight)")
    }
    init(age : Int, name : String, height : Double, weight : Double) {
        self.age = age
        self.height = height
        self.weight = weight
        self.name = name
    } 
}
class Human : Info { // 자식 클래스
    var adress : String
    override func display() { 
        print("나이 : \(age), 이름 : \(name), 키 : \(height), 몸무게 : \(weight), 주소 : \(adress)")
    }
    init(age : Int, name : String, height : Double, weight : Double, adress : String) {
        self.adress = adress
        super.init(age : age, name : name, height : height, weight : weight)
        //부모 메서드 호출 시 사용
    } 
}
var cha : Human = Human(age: 21, name : "Cha JinSoo", height : 170.0, weight : 60.0, adress : "Seoul")
cha.display() //나이 : 21, 이름 : Cha JinSoo, 키 : 170.0, 몸무게 : 60.0, 주소 : Seoul
// override : 자식클래스의 메소드 우선
```
__출처 : 'iOS프로그래밍기초(21-2학기)한성현교수님 강의 내용 변형 및 요약'__   