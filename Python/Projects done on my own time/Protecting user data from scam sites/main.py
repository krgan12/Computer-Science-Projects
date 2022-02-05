import requests, random, time

payload = {
	"login": "test@email.com",
	"password": "testpass",
}

def post_request(payload):
    response = requests.post('https://disocrds.gift/NverABbCacD',data=payload) #This discord scam site is going to be used to save people's data, you can use any other site here.
    print(payload)
    print(response)
    return 

def main():
    new_payload = payload
    with open('usernames.txt','r') as username_file:
        usernames = username_file.readlines()
    with open('passwords.txt' ,'r') as password_file:
        passwords = password_file.readlines()
    for i in range(0, len(usernames)):
        new_payload['login'] = (usernames[i].rstrip() + str(random.randint(1960, 2021)) + '@gmail.com') #[i] refers to the iteration position, for example, starting at 0, it will be [0] of usernames which will be the first element on the list, second element, and so forth.
        new_payload['password'] = passwords[i].rstrip()
        print(f'Sending fake data... Iteration number: {(i+1)}')
        post_request(new_payload)
        sleep_time = random.randint(0, 10)
        print(f'Sleeping for {sleep_time} seconds!')
        time.sleep(sleep_time)
        
while True:
    main()