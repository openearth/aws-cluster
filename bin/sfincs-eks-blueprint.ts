#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SfincsEksBlueprintStack } from '../lib/sfincs-eks-blueprint-stack';

const app = new cdk.App();
const account = ''
const region = ''
const env = { account, region }

new SfincsEksBlueprintStack(app, 'SfincsEksBlueprintStack', { env });