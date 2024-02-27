import { Injectable } from '@nestjs/common';
import { firebaseDataBase } from 'src/firebase.config';
import { ref, push, set, DataSnapshot, get } from 'firebase/database';

@Injectable()
export class TutorialService {
    async createData(data: any): Promise<void> {
        const dataRef = ref(firebaseDataBase, 'Data');
        const newElementRef = push(dataRef, {dataRef: data});
        await set(newElementRef, data);
        console.log('Enviado');
    }

    async getData(): Promise<any> {
        const dataRef = ref(firebaseDataBase, 'Data');
        const snapshot: DataSnapshot = await get(dataRef);
        console.log('Data recebida');
        return snapshot.val();
    }
}
