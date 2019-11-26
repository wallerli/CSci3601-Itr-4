package umm3601.mongotest;

import com.mongodb.MongoClient;
import com.mongodb.client.*;
import org.bson.Document;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

import static com.mongodb.client.model.Filters.eq;
import static com.mongodb.client.model.Projections.fields;
import static com.mongodb.client.model.Projections.include;
import static org.junit.Assert.*;

public class MongoHistorySpec {
  private MongoCollection<Document> historyDocuments;

  @Before
  public void clearAndPopulateDB() {
    MongoClient mongoClient = new MongoClient();
    MongoDatabase db = mongoClient.getDatabase("test");
    historyDocuments = db.getCollection("rooms");
    historyDocuments.drop();
    List<Document> testHistories = new ArrayList<>();
    testHistories.add(Document.parse("{\n" +
      "\"1\": {\n" +
      "\t\"0\": \"10\"\n" +
      "\t\"1\": \"5\"\n" +
      "\t\"2\": \"2\"\n" +
      "\t\"3\": \"2\"\n" +
      "\t\"4\": \"3\"\n" +
      "\t\"5\": \"2\"\n" +
      "\t\"6\": \"6\"\n" +
      "\t\"7\": \"3\"\n" +
      "\t\"8\": \"1\"\n" +
      "\t\"9\": \"8\"\n" +
      "\t\"10\": \"10\"\n" +
      "\t\"11\": \"5\"\n" +
      "\t\"12\": \"2\"\n" +
      "\t\"13\": \"2\"\n" +
      "\t\"14\": \"3\"\n" +
      "\t\"15\": \"2\"\n" +
      "\t\"16\": \"6\"\n" +
      "\t\"17\": \"3\"\n" +
      "\t\"18\": \"1\"\n" +
      "\t\"19\": \"8\"\n" +
      "\t\"20\": \"10\"\n" +
      "\t\"21\": \"5\"\n" +
      "\t\"22\": \"2\"\n" +
      "\t\"23\": \"2\"\n" +
      "\t\"24\": \"3\"\n" +
      "\t\"25\": \"2\"\n" +
      "\t\"26\": \"6\"\n" +
      "\t\"27\": \"3\"\n" +
      "\t\"28\": \"1\"\n" +
      "\t\"29\": \"8\"\n" +
      "\t\"30\": \"10\"\n" +
      "\t\"31\": \"5\"\n" +
      "\t\"32\": \"2\"\n" +
      "\t\"33\": \"2\"\n" +
      "\t\"34\": \"3\"\n" +
      "\t\"35\": \"2\"\n" +
      "\t\"36\": \"6\"\n" +
      "\t\"37\": \"3\"\n" +
      "\t\"38\": \"1\"\n" +
      "\t\"39\": \"8\"\n" +
      "\t\"40\": \"10\"\n" +
      "\t\"41\": \"5\"\n" +
      "\t\"42\": \"2\"\n" +
      "\t\"43\": \"2\"\n" +
      "\t\"44\": \"3\"\n" +
      "\t\"45\": \"2\"\n" +
      "\t\"46\": \"6\"\n" +
      "\t\"47\": \"3\"\n" +
      "}\n" +
      "\"2\": {\n" +
      "\t\"0\": \"10\"\n" +
      "\t\"1\": \"5\"\n" +
      "\t\"2\": \"2\"\n" +
      "\t\"3\": \"2\"\n" +
      "\t\"4\": \"3\"\n" +
      "\t\"5\": \"2\"\n" +
      "\t\"6\": \"6\"\n" +
      "\t\"7\": \"3\"\n" +
      "\t\"8\": \"1\"\n" +
      "\t\"9\": \"8\"\n" +
      "\t\"10\": \"10\"\n" +
      "\t\"11\": \"5\"\n" +
      "\t\"12\": \"2\"\n" +
      "\t\"13\": \"2\"\n" +
      "\t\"14\": \"3\"\n" +
      "\t\"15\": \"2\"\n" +
      "\t\"16\": \"6\"\n" +
      "\t\"17\": \"3\"\n" +
      "\t\"18\": \"1\"\n" +
      "\t\"19\": \"8\"\n" +
      "\t\"20\": \"10\"\n" +
      "\t\"21\": \"5\"\n" +
      "\t\"22\": \"2\"\n" +
      "\t\"23\": \"2\"\n" +
      "\t\"24\": \"3\"\n" +
      "\t\"25\": \"2\"\n" +
      "\t\"26\": \"6\"\n" +
      "\t\"27\": \"3\"\n" +
      "\t\"28\": \"1\"\n" +
      "\t\"29\": \"8\"\n" +
      "\t\"30\": \"10\"\n" +
      "\t\"31\": \"5\"\n" +
      "\t\"32\": \"2\"\n" +
      "\t\"33\": \"2\"\n" +
      "\t\"34\": \"3\"\n" +
      "\t\"35\": \"2\"\n" +
      "\t\"36\": \"6\"\n" +
      "\t\"37\": \"3\"\n" +
      "\t\"38\": \"1\"\n" +
      "\t\"39\": \"8\"\n" +
      "\t\"40\": \"10\"\n" +
      "\t\"41\": \"5\"\n" +
      "\t\"42\": \"2\"\n" +
      "\t\"43\": \"2\"\n" +
      "\t\"44\": \"3\"\n" +
      "\t\"45\": \"2\"\n" +
      "\t\"46\": \"6\"\n" +
      "\t\"47\": \"3\"\n" +
      "}\n" +
      "\"3\": {\n" +
      "\t\"0\": \"10\"\n" +
      "\t\"1\": \"5\"\n" +
      "\t\"2\": \"2\"\n" +
      "\t\"3\": \"2\"\n" +
      "\t\"4\": \"3\"\n" +
      "\t\"5\": \"2\"\n" +
      "\t\"6\": \"6\"\n" +
      "\t\"7\": \"3\"\n" +
      "\t\"8\": \"1\"\n" +
      "\t\"9\": \"8\"\n" +
      "\t\"10\": \"10\"\n" +
      "\t\"11\": \"5\"\n" +
      "\t\"12\": \"2\"\n" +
      "\t\"13\": \"2\"\n" +
      "\t\"14\": \"3\"\n" +
      "\t\"15\": \"2\"\n" +
      "\t\"16\": \"6\"\n" +
      "\t\"17\": \"3\"\n" +
      "\t\"18\": \"1\"\n" +
      "\t\"19\": \"8\"\n" +
      "\t\"20\": \"10\"\n" +
      "\t\"21\": \"5\"\n" +
      "\t\"22\": \"2\"\n" +
      "\t\"23\": \"2\"\n" +
      "\t\"24\": \"3\"\n" +
      "\t\"25\": \"2\"\n" +
      "\t\"26\": \"6\"\n" +
      "\t\"27\": \"3\"\n" +
      "\t\"28\": \"1\"\n" +
      "\t\"29\": \"8\"\n" +
      "\t\"30\": \"10\"\n" +
      "\t\"31\": \"5\"\n" +
      "\t\"32\": \"2\"\n" +
      "\t\"33\": \"2\"\n" +
      "\t\"34\": \"3\"\n" +
      "\t\"35\": \"2\"\n" +
      "\t\"36\": \"6\"\n" +
      "\t\"37\": \"3\"\n" +
      "\t\"38\": \"1\"\n" +
      "\t\"39\": \"8\"\n" +
      "\t\"40\": \"10\"\n" +
      "\t\"41\": \"5\"\n" +
      "\t\"42\": \"2\"\n" +
      "\t\"43\": \"2\"\n" +
      "\t\"44\": \"3\"\n" +
      "\t\"45\": \"2\"\n" +
      "\t\"46\": \"6\"\n" +
      "\t\"47\": \"3\"\n" +
      "}\n" +
      "\"4\": {\n" +
      "\t\"0\": \"10\"\n" +
      "\t\"1\": \"5\"\n" +
      "\t\"2\": \"2\"\n" +
      "\t\"3\": \"2\"\n" +
      "\t\"4\": \"3\"\n" +
      "\t\"5\": \"2\"\n" +
      "\t\"6\": \"6\"\n" +
      "\t\"7\": \"3\"\n" +
      "\t\"8\": \"1\"\n" +
      "\t\"9\": \"8\"\n" +
      "\t\"10\": \"10\"\n" +
      "\t\"11\": \"5\"\n" +
      "\t\"12\": \"2\"\n" +
      "\t\"13\": \"2\"\n" +
      "\t\"14\": \"3\"\n" +
      "\t\"15\": \"2\"\n" +
      "\t\"16\": \"6\"\n" +
      "\t\"17\": \"3\"\n" +
      "\t\"18\": \"1\"\n" +
      "\t\"19\": \"8\"\n" +
      "\t\"20\": \"10\"\n" +
      "\t\"21\": \"5\"\n" +
      "\t\"22\": \"2\"\n" +
      "\t\"23\": \"2\"\n" +
      "\t\"24\": \"3\"\n" +
      "\t\"25\": \"2\"\n" +
      "\t\"26\": \"6\"\n" +
      "\t\"27\": \"3\"\n" +
      "\t\"28\": \"1\"\n" +
      "\t\"29\": \"8\"\n" +
      "\t\"30\": \"10\"\n" +
      "\t\"31\": \"5\"\n" +
      "\t\"32\": \"2\"\n" +
      "\t\"33\": \"2\"\n" +
      "\t\"34\": \"3\"\n" +
      "\t\"35\": \"2\"\n" +
      "\t\"36\": \"6\"\n" +
      "\t\"37\": \"3\"\n" +
      "\t\"38\": \"1\"\n" +
      "\t\"39\": \"8\"\n" +
      "\t\"40\": \"10\"\n" +
      "\t\"41\": \"5\"\n" +
      "\t\"42\": \"2\"\n" +
      "\t\"43\": \"2\"\n" +
      "\t\"44\": \"3\"\n" +
      "\t\"45\": \"2\"\n" +
      "\t\"46\": \"6\"\n" +
      "\t\"47\": \"3\"\n" +
      "}\n" +
      "\"5\": {\n" +
      "\t\"0\": \"10\"\n" +
      "\t\"1\": \"5\"\n" +
      "\t\"2\": \"2\"\n" +
      "\t\"3\": \"2\"\n" +
      "\t\"4\": \"3\"\n" +
      "\t\"5\": \"2\"\n" +
      "\t\"6\": \"6\"\n" +
      "\t\"7\": \"3\"\n" +
      "\t\"8\": \"1\"\n" +
      "\t\"9\": \"8\"\n" +
      "\t\"10\": \"10\"\n" +
      "\t\"11\": \"5\"\n" +
      "\t\"12\": \"2\"\n" +
      "\t\"13\": \"2\"\n" +
      "\t\"14\": \"3\"\n" +
      "\t\"15\": \"2\"\n" +
      "\t\"16\": \"6\"\n" +
      "\t\"17\": \"3\"\n" +
      "\t\"18\": \"1\"\n" +
      "\t\"19\": \"8\"\n" +
      "\t\"20\": \"10\"\n" +
      "\t\"21\": \"5\"\n" +
      "\t\"22\": \"2\"\n" +
      "\t\"23\": \"2\"\n" +
      "\t\"24\": \"3\"\n" +
      "\t\"25\": \"2\"\n" +
      "\t\"26\": \"6\"\n" +
      "\t\"27\": \"3\"\n" +
      "\t\"28\": \"1\"\n" +
      "\t\"29\": \"8\"\n" +
      "\t\"30\": \"10\"\n" +
      "\t\"31\": \"5\"\n" +
      "\t\"32\": \"2\"\n" +
      "\t\"33\": \"2\"\n" +
      "\t\"34\": \"3\"\n" +
      "\t\"35\": \"2\"\n" +
      "\t\"36\": \"6\"\n" +
      "\t\"37\": \"3\"\n" +
      "\t\"38\": \"1\"\n" +
      "\t\"39\": \"8\"\n" +
      "\t\"40\": \"10\"\n" +
      "\t\"41\": \"5\"\n" +
      "\t\"42\": \"2\"\n" +
      "\t\"43\": \"2\"\n" +
      "\t\"44\": \"3\"\n" +
      "\t\"45\": \"2\"\n" +
      "\t\"46\": \"6\"\n" +
      "\t\"47\": \"3\"\n" +
      "}\n" +
      "\"6\": {\n" +
      "\t\"0\": \"10\"\n" +
      "\t\"1\": \"5\"\n" +
      "\t\"2\": \"2\"\n" +
      "\t\"3\": \"2\"\n" +
      "\t\"4\": \"3\"\n" +
      "\t\"5\": \"2\"\n" +
      "\t\"6\": \"6\"\n" +
      "\t\"7\": \"3\"\n" +
      "\t\"8\": \"1\"\n" +
      "\t\"9\": \"8\"\n" +
      "\t\"10\": \"10\"\n" +
      "\t\"11\": \"5\"\n" +
      "\t\"12\": \"2\"\n" +
      "\t\"13\": \"2\"\n" +
      "\t\"14\": \"3\"\n" +
      "\t\"15\": \"2\"\n" +
      "\t\"16\": \"6\"\n" +
      "\t\"17\": \"3\"\n" +
      "\t\"18\": \"1\"\n" +
      "\t\"19\": \"8\"\n" +
      "\t\"20\": \"10\"\n" +
      "\t\"21\": \"5\"\n" +
      "\t\"22\": \"2\"\n" +
      "\t\"23\": \"2\"\n" +
      "\t\"24\": \"3\"\n" +
      "\t\"25\": \"2\"\n" +
      "\t\"26\": \"6\"\n" +
      "\t\"27\": \"3\"\n" +
      "\t\"28\": \"1\"\n" +
      "\t\"29\": \"8\"\n" +
      "\t\"30\": \"10\"\n" +
      "\t\"31\": \"5\"\n" +
      "\t\"32\": \"2\"\n" +
      "\t\"33\": \"2\"\n" +
      "\t\"34\": \"3\"\n" +
      "\t\"35\": \"2\"\n" +
      "\t\"36\": \"6\"\n" +
      "\t\"37\": \"3\"\n" +
      "\t\"38\": \"1\"\n" +
      "\t\"39\": \"8\"\n" +
      "\t\"40\": \"10\"\n" +
      "\t\"41\": \"5\"\n" +
      "\t\"42\": \"2\"\n" +
      "\t\"43\": \"2\"\n" +
      "\t\"44\": \"3\"\n" +
      "\t\"45\": \"2\"\n" +
      "\t\"46\": \"6\"\n" +
      "\t\"47\": \"3\"\n" +
      "}\n" +
      "\"7\": {\n" +
      "\t\"0\": \"10\"\n" +
      "\t\"1\": \"5\"\n" +
      "\t\"2\": \"2\"\n" +
      "\t\"3\": \"2\"\n" +
      "\t\"4\": \"3\"\n" +
      "\t\"5\": \"2\"\n" +
      "\t\"6\": \"6\"\n" +
      "\t\"7\": \"3\"\n" +
      "\t\"8\": \"1\"\n" +
      "\t\"9\": \"8\"\n" +
      "\t\"10\": \"10\"\n" +
      "\t\"11\": \"5\"\n" +
      "\t\"12\": \"2\"\n" +
      "\t\"13\": \"2\"\n" +
      "\t\"14\": \"3\"\n" +
      "\t\"15\": \"2\"\n" +
      "\t\"16\": \"6\"\n" +
      "\t\"17\": \"3\"\n" +
      "\t\"18\": \"1\"\n" +
      "\t\"19\": \"8\"\n" +
      "\t\"20\": \"10\"\n" +
      "\t\"21\": \"5\"\n" +
      "\t\"22\": \"2\"\n" +
      "\t\"23\": \"2\"\n" +
      "\t\"24\": \"3\"\n" +
      "\t\"25\": \"2\"\n" +
      "\t\"26\": \"6\"\n" +
      "\t\"27\": \"3\"\n" +
      "\t\"28\": \"1\"\n" +
      "\t\"29\": \"8\"\n" +
      "\t\"30\": \"10\"\n" +
      "\t\"31\": \"5\"\n" +
      "\t\"32\": \"2\"\n" +
      "\t\"33\": \"2\"\n" +
      "\t\"34\": \"3\"\n" +
      "\t\"35\": \"2\"\n" +
      "\t\"36\": \"6\"\n" +
      "\t\"37\": \"3\"\n" +
      "\t\"38\": \"1\"\n" +
      "\t\"39\": \"8\"\n" +
      "\t\"40\": \"10\"\n" +
      "\t\"41\": \"5\"\n" +
      "\t\"42\": \"2\"\n" +
      "\t\"43\": \"2\"\n" +
      "\t\"44\": \"3\"\n" +
      "\t\"45\": \"2\"\n" +
      "\t\"46\": \"6\"\n" +
      "\t\"47\": \"3\"\n" +
      "}\n" +
      "\"_id\": \"5dbb7ca7d8ba936a8e8d9e3f\",\n" +
      "\t\"room_id\": \"gay\"\n" +
      "  }"));
    testHistories.add(Document.parse("{\n" +
      "\"1\": {\n" +
      "\t\"0\": \"10\"\n" +
      "\t\"1\": \"5\"\n" +
      "\t\"2\": \"2\"\n" +
      "\t\"3\": \"2\"\n" +
      "\t\"4\": \"3\"\n" +
      "\t\"5\": \"2\"\n" +
      "\t\"6\": \"6\"\n" +
      "\t\"7\": \"3\"\n" +
      "\t\"8\": \"1\"\n" +
      "\t\"9\": \"8\"\n" +
      "\t\"10\": \"10\"\n" +
      "\t\"11\": \"5\"\n" +
      "\t\"12\": \"2\"\n" +
      "\t\"13\": \"2\"\n" +
      "\t\"14\": \"3\"\n" +
      "\t\"15\": \"2\"\n" +
      "\t\"16\": \"6\"\n" +
      "\t\"17\": \"3\"\n" +
      "\t\"18\": \"1\"\n" +
      "\t\"19\": \"8\"\n" +
      "\t\"20\": \"10\"\n" +
      "\t\"21\": \"5\"\n" +
      "\t\"22\": \"2\"\n" +
      "\t\"23\": \"2\"\n" +
      "\t\"24\": \"3\"\n" +
      "\t\"25\": \"2\"\n" +
      "\t\"26\": \"6\"\n" +
      "\t\"27\": \"3\"\n" +
      "\t\"28\": \"1\"\n" +
      "\t\"29\": \"8\"\n" +
      "\t\"30\": \"10\"\n" +
      "\t\"31\": \"5\"\n" +
      "\t\"32\": \"2\"\n" +
      "\t\"33\": \"2\"\n" +
      "\t\"34\": \"3\"\n" +
      "\t\"35\": \"2\"\n" +
      "\t\"36\": \"6\"\n" +
      "\t\"37\": \"3\"\n" +
      "\t\"38\": \"1\"\n" +
      "\t\"39\": \"8\"\n" +
      "\t\"40\": \"10\"\n" +
      "\t\"41\": \"5\"\n" +
      "\t\"42\": \"2\"\n" +
      "\t\"43\": \"2\"\n" +
      "\t\"44\": \"3\"\n" +
      "\t\"45\": \"2\"\n" +
      "\t\"46\": \"6\"\n" +
      "\t\"47\": \"3\"\n" +
      "}\n" +
      "\"2\": {\n" +
      "\t\"0\": \"10\"\n" +
      "\t\"1\": \"5\"\n" +
      "\t\"2\": \"2\"\n" +
      "\t\"3\": \"2\"\n" +
      "\t\"4\": \"3\"\n" +
      "\t\"5\": \"2\"\n" +
      "\t\"6\": \"6\"\n" +
      "\t\"7\": \"3\"\n" +
      "\t\"8\": \"1\"\n" +
      "\t\"9\": \"8\"\n" +
      "\t\"10\": \"10\"\n" +
      "\t\"11\": \"5\"\n" +
      "\t\"12\": \"2\"\n" +
      "\t\"13\": \"2\"\n" +
      "\t\"14\": \"3\"\n" +
      "\t\"15\": \"2\"\n" +
      "\t\"16\": \"6\"\n" +
      "\t\"17\": \"3\"\n" +
      "\t\"18\": \"1\"\n" +
      "\t\"19\": \"8\"\n" +
      "\t\"20\": \"10\"\n" +
      "\t\"21\": \"5\"\n" +
      "\t\"22\": \"2\"\n" +
      "\t\"23\": \"2\"\n" +
      "\t\"24\": \"3\"\n" +
      "\t\"25\": \"2\"\n" +
      "\t\"26\": \"6\"\n" +
      "\t\"27\": \"3\"\n" +
      "\t\"28\": \"1\"\n" +
      "\t\"29\": \"8\"\n" +
      "\t\"30\": \"10\"\n" +
      "\t\"31\": \"5\"\n" +
      "\t\"32\": \"2\"\n" +
      "\t\"33\": \"2\"\n" +
      "\t\"34\": \"3\"\n" +
      "\t\"35\": \"2\"\n" +
      "\t\"36\": \"6\"\n" +
      "\t\"37\": \"3\"\n" +
      "\t\"38\": \"1\"\n" +
      "\t\"39\": \"8\"\n" +
      "\t\"40\": \"10\"\n" +
      "\t\"41\": \"5\"\n" +
      "\t\"42\": \"2\"\n" +
      "\t\"43\": \"2\"\n" +
      "\t\"44\": \"3\"\n" +
      "\t\"45\": \"2\"\n" +
      "\t\"46\": \"6\"\n" +
      "\t\"47\": \"3\"\n" +
      "}\n" +
      "\"3\": {\n" +
      "\t\"0\": \"10\"\n" +
      "\t\"1\": \"5\"\n" +
      "\t\"2\": \"2\"\n" +
      "\t\"3\": \"2\"\n" +
      "\t\"4\": \"3\"\n" +
      "\t\"5\": \"2\"\n" +
      "\t\"6\": \"6\"\n" +
      "\t\"7\": \"3\"\n" +
      "\t\"8\": \"1\"\n" +
      "\t\"9\": \"8\"\n" +
      "\t\"10\": \"10\"\n" +
      "\t\"11\": \"5\"\n" +
      "\t\"12\": \"2\"\n" +
      "\t\"13\": \"2\"\n" +
      "\t\"14\": \"3\"\n" +
      "\t\"15\": \"2\"\n" +
      "\t\"16\": \"6\"\n" +
      "\t\"17\": \"3\"\n" +
      "\t\"18\": \"1\"\n" +
      "\t\"19\": \"8\"\n" +
      "\t\"20\": \"10\"\n" +
      "\t\"21\": \"5\"\n" +
      "\t\"22\": \"2\"\n" +
      "\t\"23\": \"2\"\n" +
      "\t\"24\": \"3\"\n" +
      "\t\"25\": \"2\"\n" +
      "\t\"26\": \"6\"\n" +
      "\t\"27\": \"3\"\n" +
      "\t\"28\": \"1\"\n" +
      "\t\"29\": \"8\"\n" +
      "\t\"30\": \"10\"\n" +
      "\t\"31\": \"5\"\n" +
      "\t\"32\": \"2\"\n" +
      "\t\"33\": \"2\"\n" +
      "\t\"34\": \"3\"\n" +
      "\t\"35\": \"2\"\n" +
      "\t\"36\": \"6\"\n" +
      "\t\"37\": \"3\"\n" +
      "\t\"38\": \"1\"\n" +
      "\t\"39\": \"8\"\n" +
      "\t\"40\": \"10\"\n" +
      "\t\"41\": \"5\"\n" +
      "\t\"42\": \"2\"\n" +
      "\t\"43\": \"2\"\n" +
      "\t\"44\": \"3\"\n" +
      "\t\"45\": \"2\"\n" +
      "\t\"46\": \"6\"\n" +
      "\t\"47\": \"3\"\n" +
      "}\n" +
      "\"4\": {\n" +
      "\t\"0\": \"10\"\n" +
      "\t\"1\": \"5\"\n" +
      "\t\"2\": \"2\"\n" +
      "\t\"3\": \"2\"\n" +
      "\t\"4\": \"3\"\n" +
      "\t\"5\": \"2\"\n" +
      "\t\"6\": \"6\"\n" +
      "\t\"7\": \"3\"\n" +
      "\t\"8\": \"1\"\n" +
      "\t\"9\": \"8\"\n" +
      "\t\"10\": \"10\"\n" +
      "\t\"11\": \"5\"\n" +
      "\t\"12\": \"2\"\n" +
      "\t\"13\": \"2\"\n" +
      "\t\"14\": \"3\"\n" +
      "\t\"15\": \"2\"\n" +
      "\t\"16\": \"6\"\n" +
      "\t\"17\": \"3\"\n" +
      "\t\"18\": \"1\"\n" +
      "\t\"19\": \"8\"\n" +
      "\t\"20\": \"10\"\n" +
      "\t\"21\": \"5\"\n" +
      "\t\"22\": \"2\"\n" +
      "\t\"23\": \"2\"\n" +
      "\t\"24\": \"3\"\n" +
      "\t\"25\": \"2\"\n" +
      "\t\"26\": \"6\"\n" +
      "\t\"27\": \"3\"\n" +
      "\t\"28\": \"1\"\n" +
      "\t\"29\": \"8\"\n" +
      "\t\"30\": \"10\"\n" +
      "\t\"31\": \"5\"\n" +
      "\t\"32\": \"2\"\n" +
      "\t\"33\": \"2\"\n" +
      "\t\"34\": \"3\"\n" +
      "\t\"35\": \"2\"\n" +
      "\t\"36\": \"6\"\n" +
      "\t\"37\": \"3\"\n" +
      "\t\"38\": \"1\"\n" +
      "\t\"39\": \"8\"\n" +
      "\t\"40\": \"10\"\n" +
      "\t\"41\": \"5\"\n" +
      "\t\"42\": \"2\"\n" +
      "\t\"43\": \"2\"\n" +
      "\t\"44\": \"3\"\n" +
      "\t\"45\": \"2\"\n" +
      "\t\"46\": \"6\"\n" +
      "\t\"47\": \"3\"\n" +
      "}\n" +
      "\"5\": {\n" +
      "\t\"0\": \"10\"\n" +
      "\t\"1\": \"5\"\n" +
      "\t\"2\": \"2\"\n" +
      "\t\"3\": \"2\"\n" +
      "\t\"4\": \"3\"\n" +
      "\t\"5\": \"2\"\n" +
      "\t\"6\": \"6\"\n" +
      "\t\"7\": \"3\"\n" +
      "\t\"8\": \"1\"\n" +
      "\t\"9\": \"8\"\n" +
      "\t\"10\": \"10\"\n" +
      "\t\"11\": \"5\"\n" +
      "\t\"12\": \"2\"\n" +
      "\t\"13\": \"2\"\n" +
      "\t\"14\": \"3\"\n" +
      "\t\"15\": \"2\"\n" +
      "\t\"16\": \"6\"\n" +
      "\t\"17\": \"3\"\n" +
      "\t\"18\": \"1\"\n" +
      "\t\"19\": \"8\"\n" +
      "\t\"20\": \"10\"\n" +
      "\t\"21\": \"5\"\n" +
      "\t\"22\": \"2\"\n" +
      "\t\"23\": \"2\"\n" +
      "\t\"24\": \"3\"\n" +
      "\t\"25\": \"2\"\n" +
      "\t\"26\": \"6\"\n" +
      "\t\"27\": \"3\"\n" +
      "\t\"28\": \"1\"\n" +
      "\t\"29\": \"8\"\n" +
      "\t\"30\": \"10\"\n" +
      "\t\"31\": \"5\"\n" +
      "\t\"32\": \"2\"\n" +
      "\t\"33\": \"2\"\n" +
      "\t\"34\": \"3\"\n" +
      "\t\"35\": \"2\"\n" +
      "\t\"36\": \"6\"\n" +
      "\t\"37\": \"3\"\n" +
      "\t\"38\": \"1\"\n" +
      "\t\"39\": \"8\"\n" +
      "\t\"40\": \"10\"\n" +
      "\t\"41\": \"5\"\n" +
      "\t\"42\": \"2\"\n" +
      "\t\"43\": \"2\"\n" +
      "\t\"44\": \"3\"\n" +
      "\t\"45\": \"2\"\n" +
      "\t\"46\": \"6\"\n" +
      "\t\"47\": \"3\"\n" +
      "}\n" +
      "\"6\": {\n" +
      "\t\"0\": \"10\"\n" +
      "\t\"1\": \"5\"\n" +
      "\t\"2\": \"2\"\n" +
      "\t\"3\": \"2\"\n" +
      "\t\"4\": \"3\"\n" +
      "\t\"5\": \"2\"\n" +
      "\t\"6\": \"6\"\n" +
      "\t\"7\": \"3\"\n" +
      "\t\"8\": \"1\"\n" +
      "\t\"9\": \"8\"\n" +
      "\t\"10\": \"10\"\n" +
      "\t\"11\": \"5\"\n" +
      "\t\"12\": \"2\"\n" +
      "\t\"13\": \"2\"\n" +
      "\t\"14\": \"3\"\n" +
      "\t\"15\": \"2\"\n" +
      "\t\"16\": \"6\"\n" +
      "\t\"17\": \"3\"\n" +
      "\t\"18\": \"1\"\n" +
      "\t\"19\": \"8\"\n" +
      "\t\"20\": \"10\"\n" +
      "\t\"21\": \"5\"\n" +
      "\t\"22\": \"2\"\n" +
      "\t\"23\": \"2\"\n" +
      "\t\"24\": \"3\"\n" +
      "\t\"25\": \"2\"\n" +
      "\t\"26\": \"6\"\n" +
      "\t\"27\": \"3\"\n" +
      "\t\"28\": \"1\"\n" +
      "\t\"29\": \"8\"\n" +
      "\t\"30\": \"10\"\n" +
      "\t\"31\": \"5\"\n" +
      "\t\"32\": \"2\"\n" +
      "\t\"33\": \"2\"\n" +
      "\t\"34\": \"3\"\n" +
      "\t\"35\": \"2\"\n" +
      "\t\"36\": \"6\"\n" +
      "\t\"37\": \"3\"\n" +
      "\t\"38\": \"1\"\n" +
      "\t\"39\": \"8\"\n" +
      "\t\"40\": \"10\"\n" +
      "\t\"41\": \"5\"\n" +
      "\t\"42\": \"2\"\n" +
      "\t\"43\": \"2\"\n" +
      "\t\"44\": \"3\"\n" +
      "\t\"45\": \"2\"\n" +
      "\t\"46\": \"6\"\n" +
      "\t\"47\": \"3\"\n" +
      "}\n" +
      "\"7\": {\n" +
      "\t\"0\": \"10\"\n" +
      "\t\"1\": \"5\"\n" +
      "\t\"2\": \"2\"\n" +
      "\t\"3\": \"2\"\n" +
      "\t\"4\": \"3\"\n" +
      "\t\"5\": \"2\"\n" +
      "\t\"6\": \"6\"\n" +
      "\t\"7\": \"3\"\n" +
      "\t\"8\": \"1\"\n" +
      "\t\"9\": \"8\"\n" +
      "\t\"10\": \"10\"\n" +
      "\t\"11\": \"5\"\n" +
      "\t\"12\": \"2\"\n" +
      "\t\"13\": \"2\"\n" +
      "\t\"14\": \"3\"\n" +
      "\t\"15\": \"2\"\n" +
      "\t\"16\": \"6\"\n" +
      "\t\"17\": \"3\"\n" +
      "\t\"18\": \"1\"\n" +
      "\t\"19\": \"8\"\n" +
      "\t\"20\": \"10\"\n" +
      "\t\"21\": \"5\"\n" +
      "\t\"22\": \"2\"\n" +
      "\t\"23\": \"2\"\n" +
      "\t\"24\": \"3\"\n" +
      "\t\"25\": \"2\"\n" +
      "\t\"26\": \"6\"\n" +
      "\t\"27\": \"3\"\n" +
      "\t\"28\": \"1\"\n" +
      "\t\"29\": \"8\"\n" +
      "\t\"30\": \"10\"\n" +
      "\t\"31\": \"5\"\n" +
      "\t\"32\": \"2\"\n" +
      "\t\"33\": \"2\"\n" +
      "\t\"34\": \"3\"\n" +
      "\t\"35\": \"2\"\n" +
      "\t\"36\": \"6\"\n" +
      "\t\"37\": \"3\"\n" +
      "\t\"38\": \"1\"\n" +
      "\t\"39\": \"8\"\n" +
      "\t\"40\": \"10\"\n" +
      "\t\"41\": \"5\"\n" +
      "\t\"42\": \"2\"\n" +
      "\t\"43\": \"2\"\n" +
      "\t\"44\": \"3\"\n" +
      "\t\"45\": \"2\"\n" +
      "\t\"46\": \"6\"\n" +
      "\t\"47\": \"3\"\n" +
      "}\n" +
      "\"_id\": \"5dbb7ca758d0466a1ceccf3f\",\n" +
      "\t\"room_id\": \"independence\"\n" +
      "  }"));

    historyDocuments.insertMany(testHistories);
  }

  private List<Document> intoList(MongoIterable<Document> documents) {
    List<Document> history = new ArrayList<>();
    documents.into(history);
    return history;
  }

  private int countHistories(FindIterable<Document> documents) {
    List<Document> history = intoList(documents);
    return history.size();
  }

  @Test
  public void shouldBeTwoHistories() {
    FindIterable<Document> documents = historyDocuments.find();
    int numberOfHistories = countHistories(documents);
    assertEquals("Should be 2 total histories", 2, numberOfHistories);
  }

  @Test
  public void shouldBeOneIndy() {
    FindIterable<Document> documents = historyDocuments.find(eq("room_id", "independence"));
    int numberOfHistories = countHistories(documents);
    assertEquals("Should be 1 Indy", 1, numberOfHistories);
  }

  @Test
  public void shouldBeOneGayHall() {
    FindIterable<Document> documents = historyDocuments.find(eq("room_id", "gay"));
    int numberOfHistories = countHistories(documents);
    assertEquals("Should be 1 Indy", 1, numberOfHistories);
  }


  @Test
  public void justName() {
    FindIterable<Document> documents
      = historyDocuments.find().projection(fields(include("room_id")));
    List<Document> docs = intoList(documents);
    assertEquals("Should be 2", 2, docs.size());
    assertEquals("First should be Gay Hall", "gay", docs.get(0).get("room_id"));
    assertEquals("Second should be Indy", "independence", docs.get(1).get("room_id"));
    assertNull("First shouldn't have id", docs.get(0).get("id"));
    assertNull("Second shouldn't have id", docs.get(0).get("id"));
  }
}

