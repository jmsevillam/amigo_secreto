import numpy as np
import random
Names = ["Diego","Mafe","Sharon","Naomi","Fran","Rodrigo","Maria", "Mareike","Max","Robin","Nancy","Emilie","Mao", "María Martínez", "Anton"]
code = {123 :0, 456 :1, 789 :2,147 :3,258 :4,1230 :6,4560 :7,7890 :8,1470 :9,2580 :10,3690 :11,159 :12,357 :14};
pos={b:a for a,b in code.items()}
p1=np.array([b for _,b in code.items()])
p2=p1.copy()

kk=random.randint(0,1000000) #xxxxxx#
random.seed(kk)

while (p2==p1).sum()!=0:
    random.shuffle(p2)

for i,j in zip(p1,p2):
    print('{}\t{}'.format(Names[i][:7],pos[j]))
