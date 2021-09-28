---
layout: post
title: switch-case
---
switch-case문
var message = 1
switch message {
    case 0: print("Hi")
    case 1: print("Hello")
    case 2: print("Bye")
    default: print(":)")
} //Hello

switch-case문 결합
var value = 2
switch(value) {
    case 1,2,3,5,7,9: print("홀수입니다.")
    case 2,4,6,8,10: print("짝수입니다.")
    default:print("10이하의 정수를 입력해주세요.") 
} //홀수입니다.

switch-case문 범위 지정 매칭
let alphabet: Character = "K"
switch(alphabet) {
    case "A"..."Z": print("대문자입니다.")
    case "a"..."z": print("소문자입니다.")
    default:print("알파벳을 입력해주세요.") 
} //대문자입니다.

switch-case에서 where절 사용 
var number = 3 
switch (number) {
    case 0...9 where number % 2 == 1: print("한자리수 홀수")
    case 0...9 where number % 2 == 0: print("한자리수 짝수")
    case 10...99 where number % 2 == 1: print("두자리수 홀수")
    case 10...99 where number % 2 == 0: print("두자리수 짝수")
    default:print("99까지의 정수를 입력해주세요.") 
} //한자리수 홀수

fallthrough
var value = 3 
switch (value) {
    case 4: print("a") 
    fallthrough 
    case 3: print("b") 
    fallthrough 
    case 2: print("c") 
    fallthrough 
    default:print("d") 
} 
//b
//c
//d

'iOS프로그래밍기초(21-2학기)한성현교수님 강의 내용 변형 및 요약'