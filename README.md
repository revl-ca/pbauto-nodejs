# pbauto-nodejs

## Contributors

Steve Thomas <steve@revl.ca>
Vincent Gournay <vincent@vgournay.com>

## Structure of the Coolux message header:

```
Offset(dec)     Description             Value   Size(bytes) Comment
00              Header signature        'PBAU'  4           constant
04              Version                 1       1           constant?
05              PB Domain                       4
09              Message data length             2           size in bytes of the data part (offset 17+)
11              Connection ID           0       4           constant (unused for TCP)
15              Protocol                0       1           constant (0=TCP, 1=UDP)
16              Header checksum                 1           calculated on bytes 04 -> 15 inclusive

Structure of the message body, when sending or receiving data:
17              Command ID                      2
19              In/Out Parameters               Variable
```
