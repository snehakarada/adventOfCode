so, Right => substract
Left => add

when I am facing north and here right means east
and left means

example :-
R5, L5, R5, R3 leaves you 12 blocks away.

starting from (0, 0) and I facing north
current facing direction :- North
cordinates :- (0, 0)
R5:-

Right means turn towards east
and plus 5
current facing direction :- East
cordinates :- (5, 0)

L5 :-
Left means turn towards North
and plus 5
current facing direction :- North
cordinates :- (5, 5)

R5:-
Right means turn towards East
and plus 5
current facing direction :- East
cordinates :- (10, 5)

R3:-
Right means turn towards south
and substract 3
current facing direction :- south
cordinates :- (10, 2)

so for the last we have
+5, +5, +5, -3 = 12

for this we need data of directions

```
directions = {
  north : {
    right : {
     direction : east,
      axis : x
      operation : add
    },
    left : {
      direction : west,
      axis : x
      operation : substract
    }
  },
  east : {
    right : {
      direction : south,
      axis : y,
      operation : substract
    },
    left : {
      direction : north,
      axis : y,
      operation : add
    }
  },
  south : {
    right : {
      direction : west,
      axis : x,
      operation : substract
    },
    left : {
      direction : east,
      axis : x,
      operation : add
    }
  },
  west : {
    right : {
      direction : north,
      axis : y,
      operation : add
    },
    left : {
      direction : south,
      axis : y,
      operation : substract
    }
  }
}
```
