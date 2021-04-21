# import libraries
import discord, requests, datetime

client = discord.Client()

@client.event
async def on_ready():
    # print sends out data of type stream rather than string
    # to get fast access from stdout use flush to force it into a string
    print('>>Logged in as {0.user}<<'.format(client), flush=True)

@client.event
async def on_message(message):
    if message.content.startswith('!quote'):
        qdict = await find_quote(message.content, message.channel)
        if qdict is not None:
            await message.channel.send(f'Quote added. Go to >>localhost:3000<< to view.')
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
    x = {
        'quote': message[firstq + 1:secondq],
        'person': person,
        'date': datetime.datetime.now().strftime('%Y/%m/%d %r')
    }
    return x
    
     
# sends validity message in case user enters invalid command structure
async def send_valid_message(channel):
    await channel.send("Functionality: `!quote \"quote\"-Person`")


async def send_data(qdict):
    # change this to whatever Express's port is run on
    # json=data converts dict to json for server
    res = requests.post('http://localhost:8080/', json=qdict)
    print(res.json)


# discord bot token
client.run('')
