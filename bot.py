# import libraries
import discord

# inheritance https://www.programiz.com/python-programming/inheritance
# inherits discord.Client super class
class MyClient(discord.Client):
    # async def 
    async def on_ready(self):
        print('Logged on as', self.user)

    async def on_message(self, message):
        # don't respond to ourselves
        if message.author == self.user:
            return
        # else
        if message.content == 'ping':
            await message.channel.send('pong')


client = MyClient()
# add discord token
client.run('token')