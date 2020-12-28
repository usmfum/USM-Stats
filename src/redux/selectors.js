import {get} from 'lodash';
import {createSelector} from 'reselect';

//APP
const networkProvider = state => get(state, 'app.provider', null);
export const networkProviderSelector = createSelector(networkProvider, w => w);
