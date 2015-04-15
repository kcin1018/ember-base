# Ember-base

This is the base Ember CLI frontend app for CCHMC.  It has bootstrap CSS/JS framework, moment.js,
and bootstrap datetimepicker included by default.  It also includes ember-simple-auth for
authentication and authorization.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Starting Project based on this

* Create an empty project and initialize git (`mkdir <app-directory && cd <app-directory> && git init`)
* Add remote origin to new repo (`git remote add origin <your-new-repo-url>`)
* Add another remote for ember-base (`git remote add ember-base ssh://git@bmiatlasp.chmcres.cchmc.org:7999/ossdevel/ember-base.git`)
* Pull in the ember-base into master branch (`git pull ember-base master`)
* Remove ember-base remote (`git remote remove ember-base`)
* rename all instances of the namespace (`grep -r -l 'ember-base' * | xargs sed -i.old 's/ember-base/<app-directory>/g'`)
* remove all of the `.old` files (`find . -name '*.old' -exec rm {} \;`)
* Commit changes to the new repository for the starting point (`git commit -am  "Base Ember.js app based on ember-base"`)
* Push initial template to your new repo (`git push --set-upstream origin master`)
    * You will need to use `--force` if you want to overwrite the git repo code.
* Install dependencies for new project (`npm install && bower install`)

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

