import re
errors = []
linenum = 0
pattern = re.compile(r"^<p")#re.compile(r"(\+\d{1,2})?[\s.-]?\d{3}[\s.-]?\d{4}")
with open ('download.txt', 'rt', encoding='utf-8') as myfile:
    try:
        for line in myfile:
             linenum += 1
             result = re.match(pattern, line)
             if result != None:
                #print(result)
                print(line)
       # if pattern.search(line) != None:  # If pattern search finds a match,
        #    errors.append((linenum, line.rstrip('\n')))
    except:
        pass
for err in errors:
    print("Line ", str(err[0]), ": " + err[1])