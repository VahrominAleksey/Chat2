import org.json.simple.JSONAware;
import org.json.simple.JSONObject;

public class newClass implements JSONAware{
    private int ID;
    private String Name;
    private String Text;
    private int status;
    newClass(String name,String text)
    {
        ID=(int)(Math.random()*100000);
        Name=name;
        Text=text;
        status=0;
    }
    newClass()
    {
        ID = (int) (Math.random() * 100000);
        Name = "User";
        Text = "";
        status = 0;
    }
    @Override
    public String toJSONString()
    {
        JSONObject Ob=new JSONObject();
        Ob.put("ID",ID);
        Ob.put("Name",Name);
        Ob.put("Text",Text);
        Ob.put("status",status);
        return Ob.toString();
    }

    public void setID(int id)
    {
        ID = id;
    }
    public int getID()
    {
        return ID;
    }


    public String getName()
    {
        return Name;
    }
    public String getText()
    {
        return Text;
    }
    public int getStatus()
    {
        return status;
    }
    @Override
    public String toString()
    {
        return Name+": "+Text;
    }
    @Override
    public boolean equals(Object Ob)
    {
        return (((newClass)Ob).getID()== ID);
    }
    public static newClass parse(JSONObject Ob){
        newClass Cl=new newClass();
        Cl.Name=(String)Ob.get("Name");
        Cl.Text=(String)Ob.get("Text");
        Cl.ID=Integer.parseInt(Ob.get("ID").toString());
        Cl.status=Integer.parseInt(Ob.get("status").toString());
        return Cl;
    }
    public void Edit(String text)
    {
        if(status!=2)
        {
            status=1;
            Text=text;
        }
    }
    public void Delete() {
        if (status != 2) {
            status = 2;
            Text = "Message was deleted.";
        }
    }
}
