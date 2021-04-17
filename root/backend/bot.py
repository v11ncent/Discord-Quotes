# import libraries
import discord

client = discord.Client()

@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    # for readability
    message_string = message.content
    channel = message.channel

    if message.author == client.user:
        if message_string.startswith('['):
            await message.pin()
        return

    if message_string.startswith('!quote'):
        # checks validity
        await find_quote(message_string, channel)
        
# finds the quote inside the message
async def find_quote(message, channel):
    quote_dict = dict()
    find_list = ["\"", "“", "”"]
    found_count = 0
    inner_count = 0
    outer_count = 0
    for i in find_list:
        # if we found 2 quotes already
        if found_count == 2:
            break

        if i == message[7]:
            found_count += 1
            first_quote = message.find(i, 7, 8)
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
    # need to add functionality to save later
    print(message[first_quote + 1:])
    quote_dict['quote'] = message[first_quote + 1:second_quote]
    quote_dict['person'] = person    
    quote_builder = f"[{quote_dict['quote']} - **{quote_dict['person']}**]"
    print(f"QUOTE: {quote_builder}")
    await channel.send(quote_builder)
    return


# sends validity message in case user enters invalid command structure
async def send_valid_message(channel):
    await channel.send("**Functionality**: !quote \"quote\"-Person")


# functionality to add to text file to save to a mock database or something
def add_quote(message):
    pass



client.run('ODMwMzIxNDYzNzk3MzUwNDEx.YHE_Hw.UdQxY3b6Tx1z1FkYhyPV8S77si8')
