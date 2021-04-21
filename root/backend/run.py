import subprocess

# https://stackoverflow.com/questions/2502833/store-output-of-subprocess-popen-call-in-a-string

output = subprocess.Popen(['python.exe', 'bot.py'])
print(output.communicate()[0])