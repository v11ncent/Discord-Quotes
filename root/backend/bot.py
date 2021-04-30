# import libraries
import discord, aiohttp, asyncio, datetime, json

client = discord.Client()

@client.event
async def on_ready():
    # print sends out data of type stream rather than string
    # to get fast access from stdout use flush to force it into a string
    print('>>Logged in as {0.user}<<'.format(client), flush=True)

@client.event
async def on_message(message):
    if message.content.startswith('!quote get'):
        quote = await get_quote(message.content, message.channel)
        x = json.loads(quote)
        await message.channel.send(x)
    if message.content.startswith('!quote'):
        qdict = await search_msg_for_quote(message.content, message.channel)
        if qdict is not None:
            await message.channel.send(f'Quote added. Go to >>localhost:3000<< to view.')
            await send_data(qdict)
    

# gets quotes from person
async def get_quote(message, channel):
    # !quote get vince
    if message == '!quote get' or message == '!quote get ':
        await send_valid_message(channel, 1)
        return
    
    person = message[10:].strip()
    data = await get_data(person)
    return data

    
# finds the quote inside the message
async def search_msg_for_quote(message, channel):
    # do this before anything else so we don't waste time
    if message == '!quote':
        await send_valid_message(channel, 0)
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
                    await send_valid_message(channel, 0)
                    return
        elif index == list_length:
            await send_valid_message(channel, 0)
            return
    
    # find the person
    if message[secondq + 1] == "-":
        person = message[secondq + 2:]
    else:
        await send_valid_message(channel, 0)
        return
    
    # substring = string[start:end:step]
    x = {
        'quote': message[firstq + 1:secondq],
        'person': person,
        'date': datetime.datetime.now().strftime('%Y/%m/%d %r')
    }
    return x
    

# sends validity message in case user enters invalid command structure
async def send_valid_message(channel, mode):
    # searching for quote
    if mode == 0:
        await channel.send('Functionality: `!quote \"quote\"-Person`')
    # searching for person
    if mode == 1:
        await channel.send('Functionality: `!quote get person`')

    
# makes simple get request for testing
async def get_data(person):
    # https://docs.aiohttp.org/en/stable/client_quickstart.html
    # https://masnun.com/2015/11/20/python-asyncio-future-task-and-the-event-loop.html#:~:text=An%20event%20loop%20is%20a,pauses%20it%20and%20runs%20another.
    async with aiohttp.ClientSession() as session:
        params = {'person': person}
        async with session.get('http://localhost:8080/get4discord', params=params) as resp:
            return await resp.text()
            



# discord bot token
client.run('')
