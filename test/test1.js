import test from 'tape';
import myModule from '../src/index';


test('Your module', t => {
    t.plan(1);
    let truthBomb = myModule();
    t.equal(true, truthBomb, 'works as expected...');
});
