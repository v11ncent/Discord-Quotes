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
    # do this before anything else so we don't waste memory
    if message == '!quote':
        await send_valid_message(channel)
        return

    find_list = ["\"", "“", "”"]
    found_count = 0
    inner_count = 0
    outer_count = 0
    
    for i in find_list:
        # if we found 2 quotes already
        if found_count == 2:
            break
        if (i == message[7], first_quote := 7):
            found_count += 1
            for i in find_list:
                if i in message[first_quote + 1:]:
                    found_count += 1
                    second_quote = message.find(i, first_quote + 1)
                    break
                else:
                    inner_count += 1
        else:
            outer_count += 1

    if outer_count == 3 or inner_count == 3:
        await send_valid_message(channel)
        return

    # find the person
    if message[second_quote + 1] == "-":
        person = message[second_quote + 2:]
    else:
        await send_valid_message(channel)
        return

    # substring = string[start:end:step]
    return {
        'quote': message[first_quote + 1:second_quote],
        'person': person
    }
    
     
# sends validity message in case user enters invalid command structure
async def send_valid_message(channel):
    await channel.send("**Functionality**: !quote **\"**quote**\"**-Person")


async def send_data(qdict):
    # change this to whatever Express's port is run on
    res = requests.post('http://localhost:8080/', data=qdict)
    print(res.text)


# discord bot token
client.run('')
