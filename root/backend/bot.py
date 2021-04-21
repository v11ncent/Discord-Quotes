# import libraries
import discord
import requests

client = discord.Client()

@client.event
async def on_ready():
    print('>>Logged in as {0.user}<<'.format(client))

@client.event
async def on_message(message):
    # for readability
    message_string = message.content
    channel = message.channel

    # if message.author == client.user:
       # if message_string.startswith('['):
        #    await message.pin()
     #   return

    if message_string.startswith('!quote'):
        qdict = await find_quote(message_string, channel)
        if qdict is not None:
            await channel.send(qdict)
            await send_data(qdict)

        
# finds the quote inside the message
async def find_quote(message, channel):
    # do this before anything else so we don't waste time
    if message == '!quote':
        await send_valid_message(channel)
        return

    find_list = ["\"", "“", "”", "'"]
    list_length = len(find_list)
    firstq = None
    secondq = None
    
    print(f'Message: {message}')
    for index, item in enumerate(find_list):
        if firstq is not None and secondq is not None:
            break
        if item == message[7]:
            firstq = 7
            for index, item in enumerate(find_list):
                if item in message[firstq + 1:]:
                    # firstq + 1 to find next occurrence
                    secondq = message.index(item, firstq + 1)
                    break
                elif index == list_length:
                    await send_valid_message(channel)
                    return
        elif index == list_length:
            await send_valid_message(channel)
            return
    
    # find the person
    if message[secondq + 1] == "-":
        person = message[secondq + 2:]
    else:
        await send_valid_message(channel)
        return

    # substring = string[start:end:step]
    return {
        'quote': message[firstq + 1:secondq],
        'person': person
    }
    
     
# sends validity message in case user enters invalid command structure
async def send_valid_message(channel):
    await channel.send("Functionality: `!quote \"quote\"-Person`")


async def send_data(qdict):
    # change this to whatever Express's port is run on
    res = requests.post('http://localhost:8080/', data=qdict)
    print(res.text)


# discord bot token
client.run('')
