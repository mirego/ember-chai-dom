import Application from '../app';
import config from '../config/environment';
import {setApplication} from '@ember/test-helpers';
import {start} from 'ember-mocha';
import setupChaiDomHelpers from 'ember-chai-dom-helpers/test-support/setup';

setupChaiDomHelpers();
setApplication(Application.create(config.APP));

start();
