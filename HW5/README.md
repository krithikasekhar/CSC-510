# HW5 
## Configuration Management and Continuous Deployment  
## Steps for running Ansible and Playbook 
### Creating a virtual machine 
-> Have VirtualBox and vagrant pre-installed in the system  
-> Vagrant only allows one virtual machine configuration per directory. Hence, create two directories called ansible and node1 inside the directory boxes  
-> cd /boxes/ansible and Initialize a virtual machine using:  
vagrant init ubuntu/trusty64  
-> Start up the virtual machine  
vagrant up  
Then  
vagrant ssh  
You should be able to connect to the machine now.  
-> Enable private networking by uncommenting the following line in Vagrantfile:  
config.vm.network "private_network", ip: "192.168.33.10"  
-> Then run vagrant reload.  
-> Create a new VM with vagrant in /boxes/node1. Enable private networking, but with a different ip address.  
### Setting up Ansible  
Follow these steps to install Ansible on your configuration server.  
$ sudo apt-add-repository ppa:ansible/ansible  
$ sudo apt-get update  
$ sudo apt-get install ansible  
### Setting up inventory file and ssh keys  
Create a inventory file that contains the following:  
[nodes]  
192.168.33.60 ansible_ssh_user=vagrant ansible_ssh_private_key_file=./keys/node1.key  
### Setting up ssh keys  
-> On the host machine, cd /boxes/node1. Then run vagrant ssh-config to get path of the private_key of node1, open it up and copy contents into textfile.  
-> Inside the configuration server, create a keys/node1.key file that contains the private_key you previously copied. You may need to chmod 600 keys/node1.key.  
-> Test your connection between ansible and node0:  
ssh -i keys/node1.key vagrant@192.168.33.60  
If you see an error or prompt for a password, you have a problem with your key setup.  
-> You can also run the ping test to make sure you have a successful connection:  
ansible all -m ping -i inventory -vvvv  
### Running Anisble playbook files  
Ansible playbooks are essentially files formatted as yaml. I have added the Ansible playbook files, setup.yml and task.yml to the HW5 repo and the files can be run in the configuration server as follows:  
ansible-playbook -i inventory setup.yml -s  
ansible-playbook -i inventory task.yml -s  
The -s option will allow the playbook to sudo as root if necessary.  
### Screencast  
The link to the Screencast is given below:  
https://youtu.be/4-VVZ7BLuss  

## Concepts  
### Why should developers use configuration management tools to manage their software programs? What can go wrong?  
  
Some of the main issues related to software development are:  
Lack of visibilty  
Lack of control  
Lack of traceability  
Lack of monitoring  
Uncontrolled change  
Software Configuration Management (SCM) is overall management of a software product or system. This includes technical aspects of the project, organizations and the control of modifications changes to the project plan during the development phase. Changes are inherent and ongoing in any software project. Change Control/Management defines processes to prevent unauthorized changes, procedures to follow when making changes, required information, possibly workflow management as well. SCM practices include revision control and the establishment of baselines. If something goes wrong, SCM can determine what was changed and who changed it. If a configuration is working well, SCM can determine how to replicate it across many hosts.  
SCM is needed because there can be many versions of a software when many developers are working on it concurrently. In a situation when bug fixing should be carried out on multiple environments, SCM makes this possible.  
Developers should use configuration management tools to manage their software programs as it is beneficial in the following ways:  
##### Control  
This means the ability to review, approve, and incorporate changes into a software. There must be only one controlling tool so that there is only one set of training, license management, installation, and user procedures. The SCM tool permits only controlled change to the baseline CIs and this ensures that integrity is maintained.  
##### Management  
It refers to the automation of software processes through their life cycles right up to production and delivery. Identification of CIs through a unique naming convention allows version, release, update, and full change tracking. This is helpful to the developers to keep a constant track on the software product's versions and allows them to address any required changes efficiently.  
##### Cost Savings  
Since all changes are tracked efficiently, no unnecessary cost in terms of both time and money will be required. Using SCM tools provides a managed bill of materials for the product released to customers. The cost savings also scale with the usage of SCM tools.  
##### Quality  
Measuring the end product to ensure high quality is done through tracking the changes made to a product throughout its life cycle. Dcoumenting all the changes in a timely manner will be helpful for future estimates.  

The following are the things that can go wrong with configuration management:   
1. Many tools do great provisioning but are not so adept at providing ongoing configuration management. Thus proper research must be done to find out whether one needs provisioning tools or ongoing configuration management tool.  
2. Using traditional application deployment tools for infrastructure configuration management may get you part of the way, but you’ll need to script all the required changes, which is not extensible and defeats the true purpose of a tool.  
3. Similarly, we cannot use a CI or a Build Automation tool for configuration management. These are helpful for developers and not for Operations teams that are concerned with the application release into Production environments and then the ongoing configuration management of the entire application stack.  
4. Focusing on only a single part of the stack.  
5. Direct Server access to production. 
#### References:  
https://intensetesting.wordpress.com/2014/03/13/what-is-software-configuration-management-and-why-it-is-required/  
http://www.informit.com/articles/article.aspx?p=26858&seqNum=8  
https://devops.com/6-big-bad-mistakes-configuration-management-part-1/

### Explain the difference bewteen continuous integration, continuous delivery, and continuous deployment, in your own words.  
 
Continuous integration, continuous deployment, and continuous delivery have the same goal: make our software development and release process faster and more robust. The key difference between the three is in the scope of automation applied.
#### Continuous integration(CI):  
Most developers start with CI which involves everyone making commits and merges to a central repository multiple times everyday. Each merge triggers an automated build and testing sequence for the given project. Automated tests then verify code, UI behaviour and application performance, all of which form the 'build' stage. CI allows developers to make changes to the software before it reaches the user and  as a result, developers make code commits with greater confidence, knowing that there is still an opportunity to redeem the product if something goes wrong.  
#### Continuous delivery(CD):  
Continuous Delivery is a practice of automating the entire software release process. The idea is to do CI, plus automatically prepare and track a release to production. The purpose is to increase the productivity of developers by eliminating manual tasks. CD essentially means that anyone with sufficient privileges can deploy a software at any time.The approach helps reduce the cost, time, and risk of delivering changes by allowing for more incremental updates to applications in production. However, in continuous delivery, still manual approval is required for initiating a deploy to production.  
#### Continuous deployment:  
In continuous deployment, every change in the source code is automatically deployed to production, without the need to wait for manual authorization for deployment. A developer's job typically ends at reviewing a pull request from a teammate and merging it to the master branch. A continuous deployment service takes over from there by running all tests and deploying the code to production, while keeping the team informed about outcome of every important event. Continuous deployment requires a highly developed culture of monitoring, being on call, and having the capacity to recover quickly. So continuous deployment, in essence, captures all the features of CI and CD in addition to making deployment to production fully automated.  
#### References:  
https://semaphoreci.com/blog/2017/07/27/what-is-the-difference-between-continuous-integration-continuous-deployment-and-continuous-delivery.html  
https://en.wikipedia.org/wiki/Continuous_delivery 
