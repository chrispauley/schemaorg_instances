# Schema.org Instance Driven Website

This is a static website building application that uses semantic data to build the content for humans and machines.

The motivation for this design is to use a controlled vocabulary to structure the data for the content to make it web 3.0 capable. The semantic web enables good SERP rankings, rich snippets, and other cool stuff. This is my part of providing "Raw Data Now" that Tim Berners-Lee requested in his TED Talk.

### Goals
The main goal is to present content for humans and machines.

### Design Decisions
- I'd like to call this the "Vocabulary Driven Design" approach. In this case we are using [Schema.org](http://schema.org) as our vocabulary. The vocabulary is widely supported for the semantic web and it is mature. The elephant in the room, Google, supports this vocabulary so the positive benefits of machine readable content ought to be apparent. The other social media giants support the semantic web too: Twitter and Facebook uses meta tags in the html head section as well as microformats and RDFa.

- This project will use JSON-LD because it is JSON. This enables including the page meta data in a script tag and it can be injected into the page as content.

- The project will generate static content instead of a CMS like WordPress.  The source of truth for a CMS is the database. One could use plugins to automate the process of presenting the meta data, but that's not fun and WP creates monoliths of obfuscated content. Static content can be much faster to load and it enables different options for enhancement based upon my skillset and goals for using the structured data with a controlled vocabulary.

- The source of truth for this application will be the instances of JSON-LD data. This design decision will be enable us to add more semantic web features with the ease of using JSON. One could use triples in a turtle file or an RDF file, but that will easily put the project at risk. The context of using structured data for the purpose of generating human and machine readable content in a website. A triple store of RDF instances can be read into a graph database for analysis, but that is a different purpose. Static site generation with RDF  would require transforming the data into html and then the rich snippets would need to be smart enough to use XML either through another GET or through embedded data. XML embedded in a web page is hard and our goal is to make easy to consume the information.

- The project will use Nodejs. Node works. Sure we could use Ruby with Jekyll. We could use Python with Django. We could use Java, Visual Studio, or another language and environment.

#### Tooling Decisions
- The project will use the following tools:
  - Yarn, because of yarn.lock works and NPM caching and dependency management isn't as good.
  - GulpJS, because NPM task runner features aren't enough. Streams in GruntJS are good, but assigning data to a template from an external file didn't really work easily for me.  Webpack can serve a task runner, but it requires that all the pieces get connected into one stream of dependencies in order for everything to build.
  - PugJS, because the template engine is mature and it supports includes, mixins (functions), variables, conditionals, and control structures. Task managers can also use pug to generate pages from individual template files or multiple pages from one data source file. Pug, formerly Jade, has a powerfully succinct syntax that can be easier to compose without getting lost in opening an closing html tags.
  - Use CDNs for CSS and JS libraries for presentation purposes.
  - Initial versions of this application will not use ReactJS or other frameworks. At that point, webpack, webpack loaders, and webpack-dev-server will likely be used to implement additional components to enhance the site.



TL;DR
## Installation

#### Development Environment
```
nvm --version && node --version && npm --version && yarn --version && gulp --version
0.32.1
v7.2.1
3.10.10
0.15.1
[10:57:34] CLI version 3.9.0
[10:57:34] Local version 3.9.1```
- git clone [add link to this repo]


## Usage
Add content to the data folder of the supported schema entity.
For example, add a JSON-LD recipe content to the data\Recipe folder.  

#### Rebuild the content by typing:
yarn install

#### Preview the site
```
webpack-dev-server
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

2017-07-28 Added repo to github


## Credits
- W3C
- Schema.org
- GitHub
- NPM and open source contributors


## License

MIT
