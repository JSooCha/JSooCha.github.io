---
title: Java
excerpt: Java에 대해
categories: codestates
tags: [codestates, Java]
toc: true
toc_sticky: true
author_profile: true
sidebar_main: true
---

## 특징
<hr>

- 객체지향 프로그래밍(Object Oriented Programming, OOP) 언어      
    - 객체를 통해 프로그램을 설계          
    - 유지보수가 쉽고 확장성이 높음       
- 운영체제에 독립적
    - JRE가 설치되어 있는 모든 운영체제에서 실행 가능
- 함수형 프로그래밍 지원
    - 람다식, 스트림
- 자동 메모리 관리
    - Garbage Collection


## JVM(Java Virtual Machine)
<hr>

- 바이트코드를 운영체제에 맞는 기계어로 변환[^1]  
    [^1]: 운영체제에 독립적인 이유
    - 컴파일러가 코드를 바이트코드(Bytecode)로 변환하면 JVM은 바이트코드를 운영체제에 맞는 기계어로 변환하여 실행
- 자바는 컴파일 시 JVM을 거치기 때문에 다른 언어들에 비해 속도가 느린 편[^2]  
    [^2]: JVM 내부의 JIT 컴파일러를 통해 속도 개선

JRE(Java Runtime Environment) : JVM + 표준 클래스 라이브러리
JDK(Java Development Kit) : JRE + 개발 도구[^3]  
[^3]: OracleJDK, OpenJDK





