---
title: Hello World
author: Muhamad Fakhrusy
date: 2020-07-13T00:00:00.0Z
excerpt: >-
  My First Post, as I need to pass on the tradition, is a hello world post.
thumbnail: code_background.jpg
status: active
category: programming
---

javascript:

```javascript
console.log("Hello World!");
```

C++:

```cpp
#include<iostream>

int main() {
  std::cout << "Hello World!";

  return 0;
}
```

rust:

```rust
fn main() {
  println!("Hello World!")
}
```

go:

```go
package hello

import "fmt"

func main() {
  fmt.Println("Hello World!")
}
```

ReasonML:

```reason
Js.log("Hello World")
```

fortran: ([here](https://en.wikibooks.org/wiki/Fortran/Hello_world))

```fortran
program hello
  print *, "Hello World!"
end program hello

```

brainfuck: (from [here](https://esolangs.org/wiki/Hello_world_program_in_esoteric_languages))

```brainfuck
+[-[<<[+[--->]-[<<<]]]>>>-]>-.---.>..>.<<<<-.<+.>>>>>.>.<<.<-.
```

assembly 6502: (from [here](https://rosettacode.org/wiki/Hello_world/Text#6502_Assembly))

```asm6502
; goodbyeworld.s for C= 8-bit machines, ca65 assembler format.
; String printing limited to strings of 256 characters or less.

a_cr  = $0d ; Carriage return.
bsout = $ffd2 ; C64 KERNEL ROM, output a character to current device.
      ; use $fded for Apple 2
 .code

  ldx #0; Starting index 0 in X register.
printnext:
  lda text,x; Get character from string.
  beq done; If we read a 0 we're done.
  jsr bsout; Output character.
  inx; Increment index to next character.
  bne printnext; Repeat if index doesn't overflow to 0.
done:
rts; Return from subroutine.

.rodata

text:
.byte "Hello world!", a_cr, 0
```

Seems like not every language is being highlighted properly on the blog markdown renderer, but who cares, since we're all writing javascript anyways, right?
