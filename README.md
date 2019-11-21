# MITRE Cyber Academy Website

### What is this?

This repository is for the website for the MITRE Cyber Academy.

### Editing

1. Make changes to the project
2. Make sure you have the latest version of Ruby
3. Run ```gem install bundle```
4. Run ```rbenv rehash```
5. Run ```bundle install```
6. Run ```bundle exec jekyll server```
7. In your browser enter localhost:4000 in the address bar

### How do I contribute?

1. Fork the repository on github
2. Run ```git clone [address]```
3. Make your edits
4. View your edits
5. Run the git add and commit commands. Please make sure your commit messages are descriptive.
6. Run ```git push origin master```
7. Submit a pull request

### On a fresh install of Ubuntu Xenial 16.04 LTS

	sudo apt install ruby
	sudo apt install rbenv
	sudo apt-get install build-essential patch ruby-dev zlib1g-dev liblzma-dev
	export PATH=$PATH:/home/<username>/.gem/ruby/<ruby version>/bin/
	gem install --user-install bundle
	echo 'exclude: [vendor]' >> _config.yml # (https://stackoverflow.com/questions/39057405/unable-to-build-a-jekyll-site-invalid-date)
	bundle install --path vendor/bundle
	bundle exec jekyll server

### Or with Docker :D
    
    docker run -p 8080:4000 -v $(pwd):/site bretfisher/jekyll-serve
