import { NextApiRequest, NextApiResponse } from 'next'; //Mas propiedades para el request y response
import DB from '@database';

const AvoDetail = async ( request: NextApiRequest, response: NextApiResponse) => {
    const db = new DB();
    const idAvo = request.query.id as string;
    const entry = await db.getById(idAvo);

    response.status(200).json({ data: entry });
}

export default AvoDetail;