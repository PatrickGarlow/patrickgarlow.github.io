import os
 
rootdir = 'C:/Users/patri/Documents/GitHub/patrickgarlow.github.io/img'
for file in os.listdir(rootdir):
    d = os.path.join(rootdir, file)
    if os.path.isdir(d):
        dir_list = os.listdir(d)
        folder = d.split('img')[1][1:]
        print("----------------------")
        #C:/Users/patri/Documents/GitHub/patrickgarlow.github.io/img\ssh
        #     <img class="project-image"src="img/ball/in.png" alt="">
        for imageLink in dir_list:
            print('<img class="project-image"src="img/' + folder + "/" + imageLink + '" alt="">')