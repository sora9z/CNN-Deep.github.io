# <파이썬 알고리즘 인터뷰-2부 3장 Python>
- Python 문법
  - 인데트(Indent) : 
    - PEP 8 에 따라 공백 4칸을 원칙으로 함
    - PEP(Python Enhncement Proposals, 파이썬 개선 제안서)
    - PEP 8 : 파이썬 코딩 스타일 가이드
  - 네이밍 컨벤션 (Naming Convention) : 
    - Python은 PEP 8을 통해 Snake Case 방식의 네이밍 컨벤션을 권장한다.
  - 타입 힌트(Type Hint) : 
    - PEP 484 문서에 추가됨.
    - s:str="1"</br>
      b:int=1
    - def fn(a:int)->bool</br>
      - Type Hint를 사용하게 되면 fn() 함수의 파라미터 a가 정수형임을 분명하게 알 수 있음.
      - 리턴 값이 bool 이라는 것도 알 수 잇음.
    - $ pip install mypy 를 설치하여 사용하면 타입 힌트에 오류가 없는지 자동으로 확인할 수 있다. (타입 힌트가 잘못 지정된 코드는 Incompatible return value type 오류가 발생함)
  - 리스트 컴프리헨션(List Comprehension)
    - 기존의 리스트를 기반으로 새로운 리스트를 만들어내는 구문
    - 람다 표현식에 map이나 filter를 섞어서 사용하는 것에 비해 가독성이 높다.
    - 대체로 표현식은 2개를 넘지 않아야 한다.
    - EX) 홀수인 경우 2를 곱해 출력
      - List comprehension 사용하지 않을 경우 
        ```python
        a=[]
        for n in range(1,10+1):
            if n%2==1:
                a.append(n*2)
        >>>a
        [2,6,10,14,28]
      - List comprehension 사용할 경우
        ```python
        [n*2 for n in range(1,1+10) if n%2==1]
        [2,6,10,14,18]
      - 2.7 버전 이후 Dictionary등이 가능하도록 추가됨
        ```python
        a={}
        for key,value in original.items():
            a[key]=value
        
        # Dictionary comprehension 사용
        a={key:value for key,value in original.items()}
  - 제너레이터(Generator)
    - 루프의 반복(Iteration)동작을 제어할 수 있는 루틴 형태
    - yield 구문을 사용하여 제너레이터를 리턴한다.
    - yield는 중간값을 리턴한 다음 함수는 종료되지 않고 계속해서 맨 끝에 도달할 때까지 실행된다.
    - while True 구문은 종료 조건이 없으므로 계속해서 값을 내보낼 수 있다.
    ```python
    >>> def get_natural_number():
            n=0
            while True:
                n+=1
                yield n
        # 함수의 리턴값은 다음과 같이 제너레이터가 된다.
    >>> get_natural_number()
    <generator object get_natural_number at 0x10d3139d0>
    ```
    - 다음 값을 생셩하려면 next()로 추출한다.
    ```pythin
      >>> g=get_natural_numbers()
      >>> for _ in range(0,100):
          print(next(g))
    ```
    - 제너레이터는 여러 타입의 값을 하나의 함수에서 생성하는 것도 가능.
    ``` python
    >>> def generator():
        yield 1
        yield 'strign'
        yield True
    >>> g=generator()
    >>> g
    <generator object generator at 0x10~~>
    >>> next(g)
    1
    >>> next(g)
    'string'
    >>> next(g)
    True
    ```

  - range
    - 제너레이터의 방식을 활용하는 대표적인 함수
    - range()는 range 클래스를 리턴한다
    - for 문에서 사용할 경우 내부적으로 제너레이터의 next()를 호출하득 매버 다음 숫자를 생성한다.
    - 숫자 100만개를 생성하는 2가지 방법
    ```python
    >>> a=[n for n in range(1000000)]
    >>> b=range(1000000)

    >>> len(a)
    1000000
    >>> len(b)
    1000000
    >>> len(a)==len(b)
    True
    # a는 이미 생성된 닶이 담겨있고, b는 생성해야 한다는 조건만 존재
    >>> b
    range(0,1000000)
    >>> type(b)
    <class 'range'>

    # 메모리 점유율 비교
    >>> sys.getsizeof(a)
    8697464
    >>> sys.getsizeof(b) # 생성 조건만 보관하므로 메모리 점유얼이 적다
    48

    # 인덱스로 접근 시 바로 생성한다.
    >>> b[999]
    999
    ```
  - enumerate

    

