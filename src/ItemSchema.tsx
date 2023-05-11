import {BSON} from 'realm';

export class Item extends Realm.Object<Item> {
  _id!: BSON.ObjectId;
  isComplete!: boolean;
  summary!: string;
  owner_id!: string;

  static schema: Realm.ObjectSchema = {
    name: 'Item',
    primaryKey: '_id',
    properties: {
      // This allows us to automatically generate a unique _id for each Item
      _id: {type: 'objectId', default: () => new BSON.ObjectId()},
      // All todo items will default to incomplete
      isComplete: {type: 'bool', default: false},
      summary: 'string',
      owner_id: 'string',
    },
  };
}


// const realm = useRealm();
// const items = useQuery(Item);
// const trainNames = useQuery(trainName).sorted('_id');
// const user = useUser();

// const [showAllItems, setShowAllItems] = useState(
//   !!realm.subscriptions.findByName(itemSubscriptionName),
// );
// const createItem = useCallback(
//   ({summary}: {summary: string}) => {
//     // if the realm exists, create an Item
//     realm.write(() => {
//       return new Item(realm, {
//         summary:"ritesh",
//         owner_id: user?.id,
//       });
//     });
//   },
//   [realm, user],
// );

//for write start
// function write1 (){
  // realm.write(() => {
  //   return new Item(realm, {
  //     summary:"ritesh",
  //     owner_id: user?.id,
  //   });
  // });
// }
// write1()
//for qurey start
//useQuery(Item).sorted('_id');

//for update start
// (id: BSON.ObjectId) => {
  //  //if the realm exists, get the Item with a particular _id and update it's 'isCompleted' field
  // const item = realm.objectForPrimaryKey(Item, id);
  // realm.write(() => {
  //   item.isComplete = !item.isComplete;
  // });
// }

//for dalete start
// (id: BSON.ObjectId) => {
   //if the realm exists, get the Item with a particular _id and update it's 'isCompleted' field
  // const item = useQuery(Item).filter(item =>item._id=="643c0e1465b5313574a43712");
  // realm.write(() => {
  //   realm.delete(item);
  // });
// }

// const data="ritesh"
// createItem({data})
// const [showAllItems, setShowAllItems] = useState(
//   !!realm.subscriptions.findByName(itemSubscriptionName),
// );

// useEffect(() => {
//   if (showAllItems) {
//     realm.subscriptions.update(mutableSubs => {
//       mutableSubs.removeByName(ownItemsSubscriptionName);
//       mutableSubs.add(realm.objects(Item), {name: itemSubscriptionName});
//     });
//   } else {
//     realm.subscriptions.update(mutableSubs => {
//       mutableSubs.removeByName(itemSubscriptionName);
//       mutableSubs.add(
//         realm.objects(Item).filtered(`owner_id == "${user?.id}"`),
//         {name: ownItemsSubscriptionName},
//       );
//     });
//   }
// }, [realm, user, showAllItems]);

// realm.subscriptions.update(mutableSubs => {
//   mutableSubs.removeByName(ownItemsSubscriptionName);
//   mutableSubs.add(realm.objects(Item), {name: itemSubscriptionName});
// });
// console.log(items)
// console.log(trainNames)