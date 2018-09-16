from bs4 import BeautifulSoup
from requests import get
import sys
reload(sys)
sys.setdefaultencoding('utf8')

#Other Sites to check
##url = 'https://www.mrporter.com/'
##url3 = 'https://www.matchesfashion.com/us/mens/shop'
##url4 = 'https://www.endclothing.com/us/sale?p=1&size_toggle=small&brand=244641'

filename = "shoes.csv"
f = open(filename,"w")
#Brand, Description
headers = "OriginalPrice, SalesPrice\n"
f.write(headers)

for i in range(1,10):
    pgnum = str(i)
    url = 'https://www.farfetch.com/shopping/men/sale/shoes-2/items.aspx?view=180?page&page='+pgnum+'&sort=3'

    user_agent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36"
    urlheaders = {'User_agent':user_agent}

    page = get(url, headers=urlheaders)
    soup = BeautifulSoup(page.content, 'html.parser')
    shoeArea = soup.find("div",{"class":"baseline col9 col-md-8 col-sm-12 col-xs-12 aplha omega js-stickblock-control"})
    shoeItems = soup.find_all('article')

    desc = soup.find_all('p', {"class":"listing-item-content-description"})
    brand = soup.find_all("h5",{"itemprop":"brand"})
    origPrice = soup.find_all("span",{"data-tstid":"Label_ListingPrice"})
    salePrice = soup.find_all("span",{"data-tstid":"Label_ListingSalePrice"})


    for info in shoeItems:
        desc = info.find('p', {"class":"listing-item-content-description"})
        brand = info.find("h5",{"itemprop":"brand"})
        origPrice = info.find("span",{"data-tstid":"Label_ListingPrice"})
        salePrice = info.find("span",{"data-tstid":"Label_ListingSalePrice"})
        print(origPrice.text.replace(',',''))
        print(salePrice.text.replace(',',''))

        f.write(brand.text + "," + desc.text + "," + origPrice.text.replace(',','').replace('$','') + "," + salePrice.text.replace(',','').replace('$','') + '\n')

f.close()