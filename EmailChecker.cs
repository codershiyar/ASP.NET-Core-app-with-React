using System.Net.Mail;

public class Email
{
    private static readonly Lazy<HashSet<string>> email_blockList = new Lazy<HashSet<string>>(() =>
    {
        var lines = File.ReadLines("disposable_email_blocklist.conf")
                .Where(line => !string.IsNullOrWhiteSpace(line) && !line.TrimStart().StartsWith("//"));
        return new HashSet<string>(lines, StringComparer.OrdinalIgnoreCase);
    });

    private static bool IsBlocklisted(string domain) => email_blockList.Value.Contains(domain);

    static public void Main(string[] args)
    {
        var email = "tests@ziggo.nl";
        var addr = new MailAddress(email);
        if (IsBlocklisted(addr.Host))
        {
            Console.Write("Email is within temporary domain.");
        }
        else
        {
            Console.Write("Succes.");
        }
    }
}
