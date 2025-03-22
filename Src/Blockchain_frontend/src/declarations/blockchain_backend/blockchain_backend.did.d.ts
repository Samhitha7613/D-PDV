import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'get_data' : ActorMethod<[], string>,
  'store_data' : ActorMethod<[string], string>,
}
